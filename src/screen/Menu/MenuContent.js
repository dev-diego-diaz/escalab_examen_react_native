// import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  boton: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  colorText: {
    // color: "#3CB2F5",
  },
});

const MenuContent = ({ navigation }) => {
  return (
    <>
      <View></View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("perfil")}
        >
          <Text style={styles.colorText}>Navegar a Screens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("peliculas")}
        >
          <Text>Navegar a peliculas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("series")}
        >
          <Text>Navegar a series</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("actores")}
        >
          <Text>Navegar a actores</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuContent;
