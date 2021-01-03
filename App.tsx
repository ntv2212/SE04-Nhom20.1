
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationNavigator } from "./src/Authentication";
import { ThemeProvider } from "./src/components/Theme";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator, assets as homeAssests } from "./src/Home";
import { AppRoutes } from "src/components/Navigation";
// import { assets as authenticationAssets } from "./src/Authentication";

//const assets =[ ...homeAssests]

const AppStack = createStackNavigator<AppRoutes>();
export default function App() {
  return (
    <ThemeProvider >
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen 
              name="Authentication" 
              component={AuthenticationNavigator} 
              />
                <AppStack.Screen 
              name="Home" 
              component={HomeNavigator} 
              />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}