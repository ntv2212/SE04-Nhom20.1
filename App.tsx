
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Wellcome } from "./src/Authentication";
import { theme } from "./src/components";
import { Routes } from "./src/components/Navigation";
import { ThemeProvider } from "@shopify/restyle";

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (

    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Wellcome" component={Wellcome} />
    </AuthenticationStack.Navigator>
  )
};
export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}