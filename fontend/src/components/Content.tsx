import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import Svg, { Path, Defs, ClipPath } from 'react-native-svg';
import { Box, useTheme } from './Theme';

const { width } = Dimensions.get("window")
const viewBox = {
    width: 375,
    height: 100,
};
const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
    },
    Image: {
        width,
        height: (width * 750) / 1125,
    },
});
const height = (100 * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";
interface ContentFooterProps {
    children: React.ReactNode;
}
const Content = ({ children }: ContentFooterProps) => {
    const theme = useTheme();
    return (
        <>
            <View style={styles.background}>
                <Image
                    source={require("./assets/patterns/3.png")}
                    style={styles.Image}
                />
                <Image
                    source={require("./assets/patterns/3.png")}
                    style={styles.Image}
                />
            </View>
            {children}
            <Svg
              width={width}
              height={height}
              viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
            >
                <Path fill={theme.colors.background} d={d} />
            </Svg>
        </ >
    );
}
export default Content;