import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from './Theme';

const { width } = Dimensions.get("window")
const viewBox = {
    width: 375,
    height: 100,
};
const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width,
        height: (width * 24 / 32),
        left: 0,
        right: 0,
        bottom: 0,

    },
});
const height = (100 * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";
interface ContentFooterProps {
    children: React.ReactNode;
}
const ContentFooter = ({ children }: ContentFooterProps) => {
    const theme = useTheme();
    return (
        <>
            <Image
                source={require("./assets/patterns/3.png")}
                style={styles.background}
            />
            {children}
            <Svg
                width={width}
                height={height}
                viewBox={[0, 0, viewBox.width, viewBox.height].join("")}>
                <Path fill={theme.colors.background} d={d} />
            </Svg>
        </>
    );
}
export default ContentFooter;