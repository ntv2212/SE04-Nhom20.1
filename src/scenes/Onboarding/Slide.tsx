import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface SlidePops {
    label: string;
    right?: boolean;
}
const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width,
    },
    title: {
        fontSize: 70,
        lineHeight: 70,
        color: "white",
        textAlign: "center"
    },
    titleContainer: {
        height: 90,
        justifyContent: "center",

    },
});
const Slide = ({ label, right }: SlidePops) => {
    const transform = [
        { translateY: (SLIDER_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" },
    ];
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    );

}


export default Slide;