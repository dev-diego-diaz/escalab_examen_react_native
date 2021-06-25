import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as RootNavigation from "../routes/RootNavigation";
import { urlImagen } from "../config/constant";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  content: {
    width: 130,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  img: {
    backgroundColor: "#b2bec3",
    borderRadius: 10,
    width: 130,
    height: 180,
  },
  starContent: {
    flexDirection: "row",
    padding: 0,
    margin: 0,
    paddingVertical: 3,
  },
  star: {
    padding: 0,
    margin: 0,
  },
  textContent: {
    flexDirection: "column",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "900",
    width: "100%",
  },
  textDate: {
    fontSize: 11,
  },
});

const goldColor = "#f1c40f";
const grayColor = "#95a6a6";

const CardPerson = ({ id, imagen, name, votes }) => {
  const votesStar = Math.round((votes * 5) / 100);

  const starTotalNumber = Array.from({ length: 5 }).map((_, index) => (
    <Icon
      name="star"
      size={13}
      backgroundColor="transparent"
      color={index < votesStar ? goldColor : grayColor}
      key={index}
    />
  ));

  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={() =>
          RootNavigation.navigate("detalleActor", { id, name, avatar: imagen })
        }
      >
        <View style={styles.img}>
          <Image
            source={{ uri: `${urlImagen}${imagen}` }}
            style={{ width: 130, height: 180 }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.starContent}>{starTotalNumber}</View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>{name}</Text>
      </View>
    </View>
  );
};

export default CardPerson;
