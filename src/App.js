/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import RootNavigation from "./routes/root";

import MenuContent from "./screen/Menu/MenuContent";

const App = () => {
  return (
    <>
      <RootNavigation />
      {/* <MenuContent /> */}
    </>
  );
};

export default App;
