import React, { useContext } from "react";
import { navigationRef } from "./RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginStack from "./LoginStack";
import DrawerStack from "./DrawerStack";

import { LoginUserContext } from "../contexts/LoginContextProvider";

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const { store } = useContext(LoginUserContext);
  const { loginActive } = store;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none">
        {loginActive ? (
          <RootStack.Screen name="MenuLateral" component={DrawerStack} />
        ) : (
          <RootStack.Screen name="LoginNavigator" component={LoginStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
