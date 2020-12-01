import { createBox, createText, useTheme as useReTheme } from "@shopify/restyle"
import { ImageStyle } from "react-native";
import { TextStyle } from "react-native";
import { ViewStyle } from "react-native";
export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "#F4F0EF",
    darkGrey: "#8A8D90",
    danger :"#FF0058",
    primaryLight: "#E7F9F7"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 70,
      color: "white",
      textAlign: "center"
    },
    title1: {
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontSize: 15,
      color: "text",
      textAlign:"center"
    }
  },
  breakpoints: {}
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
//export default theme;
export const useTheme = () => useReTheme<Theme>()  
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles =<T extends NamedStyles<T>>(
        styles :(
            theme : Theme
        )=> T
    )=> () => {
        const currentTheme = useTheme();
        return styles(currentTheme);
    };