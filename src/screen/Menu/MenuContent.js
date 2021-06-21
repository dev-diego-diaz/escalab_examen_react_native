// import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {},
  boton: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  botonSalir: {
    marginVertical: 15,
  },

  avatarContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  avatarImg: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  avatarText: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
});

const MenuContent = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("perfil")}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarImg}>
            <Icon name="user" size={95} />
          </View>

          <View style={styles.avatarText}>
            <Text
              style={{ fontSize: 21, textAlign: "center", marginBottom: 5 }}
            >
              Diego Díaz
            </Text>
            <Text style={{ fontSize: 13, textAlign: "center" }}>
              di.diaz.ortiz@gmail.com
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Button
        onPress={() => {}}
        style={{ marginBottom: 30 }}
        title="Salir"
        color="#74b9ff"
      />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("peliculas")}
        >
          <Text>Películas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("series")}
        >
          <Text>Series</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate("actores")}
        >
          <Text>Ranking de Actores</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuContent;
