
import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Image} from 'react-native'

import Animated, { divide, Extrapolate, interpolate, multiply } from 'react-native-reanimated'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Slide, { SLIDE_HEIGHT } from "./Slide"
import SubSlide from './SubSlide'
import Dot from './Dot'
import { AuthNavigationProps } from 'src/components/Navigation'
import { useTheme } from '../../components'
import { makeStyles, Theme } from '../../components/Theme'

const { width } = Dimensions.get("window")
    // type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
    // const makeStyles =<T extends NamedStyles<T>>(
    //     styles :(
    //         theme : Theme
    //     )=> T
    // )=> () => {
    //     const theme = useTheme();
    //     return styles(theme);
    // };

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

        backgroundColor:theme.colors.background,
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
        subtitle: "aloaloalo ",
        description: "Find your Outfits",
        color: "#BFEAF5",
        picture: {
            src: require("../assets/1.png"),
            width: 2513,
            height: 3583,
        }

    },
    {
        title: "Playful",
        subtitle: "phò2",
        description: "2",
        color: "#BEECC4",
        picture: {
            src: require("../assets/2.png"),
            width: 2513,
            height: 3583,
        }
    },
    {
        title: "Excentric",
        subtitle: "phò3",
        description: "3",
        color: "#FFE4D9",
        picture: {
            src: require("../assets/3.png"),
            width: 2513,
            height: 3583,
        }
    },
    {
        title: "Funky",
        subtitle: "phò4",
        description: "4",
        color: "#FFDDDD",
        picture: {
            src: require("../assets/4.png"),
            width: 2513,
            height: 3583,
        }
    },
]

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const styles = useStyles();
    const theme = useTheme();
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler()
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP,
                    })
                    return (
                        <Animated.View style={[styles.underlay, { opacity }]} key={index}>
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
                    {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>
                </Animated.View>
                <View style={styles.footerContent}>
                    <View style={[styles.pagination]}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={divide(x, width)}
                                {...{ index }}
                            />))}
                    </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }],
                    }}>
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