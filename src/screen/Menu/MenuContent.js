import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuHeader from "./MenuHeader";
import MenuExitButton from "./MenuExitButton";
import * as RootNavigation from "../../routes/RootNavigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boton: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});

const MenuContent = () => {
  return (
    <>
      <MenuHeader />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => RootNavigation.navigate("peliculas")}
        >
          <Text>Películas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => RootNavigation.navigate("series")}
        >
          <Text>Series</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => RootNavigation.navigate("actores")}
        >
          <Text>Ranking de Actores</Text>
        </TouchableOpacity>
      </View>

      <MenuExitButton />
    </>
  );
};

export default MenuContent;
