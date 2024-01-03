import { BaseNavigationContainer } from "@react-navigation/core";
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { Login } from "@/screens/login";
import { Home } from "@/screens/home";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Screen One"
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Home" component={Home} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
