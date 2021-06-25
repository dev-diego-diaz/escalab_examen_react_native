import React from "react";
import { navigationRef } from "./RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginStack from "./LoginStack";
import DrawerStack from "./DrawerStack";

const RootStack = createStackNavigator();
const isLogin = true;

const RootNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <RootStack.Navigator headerMode="none">
      {isLogin ? (
        <RootStack.Screen name="MenuLateral" component={DrawerStack} />
      ) : (
        <RootStack.Screen name="LoginNavigator" component={LoginStack} />
      )}
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
