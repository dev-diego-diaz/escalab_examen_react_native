import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserScreen from "../screen/User/UserScreen";
import MoviesScreen from "../screen/Movies/MoviesScreen";
import SeriesScreen from "../screen/Series/SeriesScreen";
import ActorsScreen from "../screen/Actors/ActorsScreen";
import MenuContent from "../screen/Menu/MenuContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={MenuContent}>
    <Drawer.Screen name="perfil" component={UserScreen} />
    <Drawer.Screen name="peliculas" component={MoviesScreen} />
    <Drawer.Screen name="series" component={SeriesScreen} />
    <Drawer.Screen name="actores" component={ActorsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
