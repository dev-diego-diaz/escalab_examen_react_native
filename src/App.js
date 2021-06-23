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
import Movies from "./contexts/MoviesContextProvider";

const App = () => {
  return (
    <>
      <Movies>
        <RootNavigation />
      </Movies>
    </>
  );
};

export default App;
