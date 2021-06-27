import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserScreen from "../screen/User/UserScreen";
import MoviesScreen from "../screen/Movies/MoviesScreen";
import SeriesScreen from "../screen/Series/SeriesScreen";
import ActorsScreen from "../screen/Actors/ActorsScreen";
import MenuContent from "../screen/Menu/MenuContent";
import Detail from "../screen/Common/Detail";
import DetailSerie from "../screen/Common/DetailSerie";
import DetailActor from "../screen/Common/DetailActor";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={MenuContent}>
      <Drawer.Screen name="peliculas" component={MoviesScreen} />
      <Drawer.Screen name="perfil" component={UserScreen} />
      <Drawer.Screen name="series" component={SeriesScreen} />
      <Drawer.Screen name="actores" component={ActorsScreen} />
      <Drawer.Screen name="detalle" component={Detail} />
      <Drawer.Screen name="detalleSerie" component={DetailSerie} />
      <Drawer.Screen name="detalleActor" component={DetailActor} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
