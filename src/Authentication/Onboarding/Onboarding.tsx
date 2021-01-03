
import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'

import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated'

import Slide, { BORDER_RADIUS, SLIDE_HEIGHT } from "./Slide"
import SubSlide from './SubSlide'
import Dot from './Dot'
import { AuthNavigationProps } from 'src/components/Navigation'
import { useTheme } from '../../components'
import { makeStyles, Theme } from '../../components/Theme'
import { interpolateColor } from 'react-native-redash'

const { width } = Dimensions.get("window")
let aodai =  { uri: 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/image%2Faodai-removebg-preview.png?alt=media&token=9e89f401-8940-4b28-a61c-9022015a16e8'};
let vayngan = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/image%2Fvayngan-removebg-preview.png?alt=media&token=3ecc9099-f794-48dd-8c93-b0b0276a89f9'};
let quanjean = { uri :'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/image%2Fquan_jean-removebg-preview.png?alt=media&token=1fe81705-4969-4916-b199-c7a5d03361c0'};
let aokhoac = { uri : 'https://firebasestorage.googleapis.com/v0/b/fir-demo-a3e0d.appspot.com/o/image%2Faokhoac-removebg-preview.png?alt=media&token=20c91ec4-e690-4595-8b36-73d034b8987b'};
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
        overflow: "hidden",
        // borderBottomRightRadius: BORDER_RADIUS,
        // borderBottomLeftRadius: BORDER_RADIUS,
    },
    slider: {
        height: SLIDE_HEIGHT,
        // borderBottomRightRadius: BORDER_RADIUS,
        // borderBottomLeftRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,

        backgroundColor: theme.colors.background,
        // borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    }
}));

const slides = [
    {
        title: "Relaxed",
        subtitle: "Áo dài Việt Nam ",
        description: "Find your Outfits",
        color: "#BFEAF5",
        picture: {
            src:aodai,
            width: 2513,
            height: 3583,
        }

    },
    {
        title: "Playful",
        subtitle: "Váy ngắn nữ trẻ trung",
        description: "2",
        color: "#BEECC4",
        picture: {
            src: vayngan,
            width: 2513,
            height: 3583,
        }
    },
    {
        title: "Excentric",
        subtitle: "Áo khoác nam",
        description: "3",
        color: "#FFE4D9",
        picture: {
            src: aokhoac,
            width: 2513,
            height: 3583,
        }
    },
    {
        title: "Funky",
        subtitle: "Quần jean nam",
        description: "4",
        color: "#FFDDDD",
        picture: {
            src: quanjean,
            width: 2513,
            height: 3583,
        }
    },
]

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const styles = useStyles();
    const theme = useTheme();
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset }) => {
            x.value = contentOffset.x
        }
    });
    const backgroundColor = useDerivedValue(() => interpolateColor(x.value,
        slides.map((_, i) => i * width),
        slides.map((slide) => slide.color)
    ));
    const slider = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value
    }));
    const background = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value
    }));
    const currentIndex = useDerivedValue(() => x.value / width);
    const footerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -x.value }]
    }))
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, slider]}>
                {slides.map(({ picture }, index) => {
                    const style = useAnimatedStyle(() => ({
                        opacity: interpolate(x.value,
                            [(index - 0.5) * width, index * width, (index + 0.5) * width],
                            [0, 1, 0],
                            Extrapolate.CLAMP,
                        )
                    }))

                    return (
                        <Animated.View style={[styles.underlay, style]} key={index}>
                            <Image
                                source={picture.src}
                                style={{
                                    width: width - theme.borderRadii.xl,
                                    height: ((width - theme.borderRadii.xl) * picture.height) / picture.width
                                }}></Image>
                        </Animated.View>
                    );
                })}

                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={[StyleSheet.absoluteFill, background]}>
                </Animated.View>
                <View style={styles.footerContent}>
                    <View style={[styles.pagination]}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={currentIndex}
                                {...{ index }}
                            />))}
                    </View>
                    <Animated.View style={[{
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                    }, footerStyle,]}>
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            return (
                                <SubSlide
                                    key={index}
                                    onPress={() => {
                                        if (last) {
                                            navigation.navigate("Welcome");
                                        }
                                        else {
                                            scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width * (index + 1), animated: true })
                                        }
                                    }}

                                    {...{ subtitle, description, last }} />
                            );
                        })}
                    </Animated.View>

                </View>
            </View>
        </View>
    );
}

export default Onboarding;