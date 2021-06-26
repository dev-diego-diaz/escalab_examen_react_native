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
import Series from "./contexts/SeriesContextProvider";
import Actors from "./contexts/ActorsContextProvider";
import Login from "./contexts/LoginContextProvider";

const App = () => {
  return (
    <>
      <Movies>
        <Series>
          <Actors>
            <Login>
              <RootNavigation />
            </Login>
          </Actors>
        </Series>
      </Movies>
    </>
  );
};

export default App;
