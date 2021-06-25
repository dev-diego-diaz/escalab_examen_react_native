import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { urlImagen } from "../config/constant";

import * as RootNavigation from "../routes/RootNavigation";

const styles = StyleSheet.create({
  content: {
    height: 50,
    borderColor: "#535c68",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: "gray",
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  text: {
    alignSelf: "center",
    fontSize: 13,
    paddingRight: 15,
  },
});

const ChipContent = ({ id, name, avatar, url }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        url
          ? RootNavigation.navigate("detalleActor", { id, name, avatar })
          : () => {}
      }
    >
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Image
            source={{ uri: `${urlImagen}${avatar}` }}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>
        <View style={styles.text}>
          <Text style={{ paddingLeft: 5 }}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChipContent;
