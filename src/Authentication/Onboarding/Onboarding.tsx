import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import Animated, { multiply } from 'react-native-reanimated'
import { interpolateColor, useScrollHandler } from 'react-native-redash'
import Slide, { SLIDE_HEIGHT } from "./Slide"
import SubSlide from './SubSlide'
const BORDER_RADIUS = 75
const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        // borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        // borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
    }
});
const slides = [
    { title: "Relaxed", subtitle: "phò1", description: "Find your Outfits", color: "#BFEAF5" },
    { title: "Playful", subtitle: "phò2", description: "2", color: "#BEECC4" },
    { title: "Excentric", subtitle: "phò3", description: "3", color: "#FFE4D9" },
    { title: "Funky", subtitle: "phò4", description: "4", color: "#FFDDDD" },
]
const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler()
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>
                </Animated.View>
                <Animated.View style={[styles.footerContent,
                {
                    width: width * slides.length,
                    flex: 1,
                    transform: [{ translateX: multiply(x, -1) }],
                }]}>
                    <View style={[styles.pagination]}>
                        {/* {slides.map((_,index)=>(<Dot key={index} {...{index,x}}/>))} */}
                    </View>
                    {slides.map(({ subtitle, description }, index) => (
                        <SubSlide
                            key={index}
                            onPress={() => {
                                if (scroll.current) {
                                    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                }
                            }}
                            last={index === slides.length - 1}
                            {...{ subtitle, description }} />
                    ))}
                </Animated.View>
            </View>
        </View>
    );
}

export default Onboarding;