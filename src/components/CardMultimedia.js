import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
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

const CardMultimedia = () => {
  return (
    <View style={{ width: 130, marginHorizontal: 15 }}>
      <View style={styles.img}></View>
      <View style={styles.starContent}>
        <Icon.Button
          style={styles.star}
          name="star"
          backgroundColor="transparent"
          color="#fdcb6e"
          size={13}
        />
        <Icon.Button
          style={styles.star}
          name="star"
          backgroundColor="transparent"
          color="#fdcb6e"
          size={13}
        />
        <Icon.Button
          style={styles.star}
          name="star"
          backgroundColor="transparent"
          color="#fdcb6e"
          size={13}
        />
        <Icon.Button
          style={styles.star}
          name="star"
          backgroundColor="transparent"
          color="#bdc3c7"
          size={13}
        />
        <Icon.Button
          style={styles.star}
          name="star"
          backgroundColor="transparent"
          color="#bdc3c7"
          size={13}
        />
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>Nombre pelicula</Text>
      </View>
    </View>
  );
};

export default CardMultimedia;
