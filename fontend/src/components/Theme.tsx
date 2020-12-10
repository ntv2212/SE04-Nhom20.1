import React, { ReactNode } from 'react';
import { createBox, createText, useTheme as useReTheme } from "@shopify/restyle"
import { ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { TextStyle ,ImageStyle,ViewStyle } from "react-native";


export const palette = {
  green:"#2CB9B0",
  white: "white",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  lightBlue: "#BFEAF5"
}

const theme = {
  colors: {
    primary: palette.green,
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    textContrast: palette.white,
    background: palette.white,
    background2: "#F4F0EF",
    danger: "#FF0058",
    info: "#808080",
    lightGrey: "#FAFAFA",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1:palette.orange,
    drawer2:palette.yellow,
    drawer3:palette.pink,
    drawer4:palette.violet,
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
      color: "background",
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
    title3: {
      fontSize: 16,
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontSize: 14,
      color: "text",
      textAlign: "center"
    },
    header: {
      fontSize: 13,
      lineHeight: 24,
      color: "secondary",
    }
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>
    {children}
  </ReStyleThemeProvider>
)

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
//export default theme;
export const useTheme = () => useReTheme<Theme>()
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles = <T extends NamedStyles<T>>(
  styles: (
    theme: Theme
  ) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};