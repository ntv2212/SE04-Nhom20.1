
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigator } from "./src/Authentication";
import { theme } from "./src/components/Theme";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "@shopify/restyle";


export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}