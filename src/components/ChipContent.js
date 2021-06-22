import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  content: {
    height: 50,
    width: 150,
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

const ChipContent = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.content}>
        <View style={styles.avatar}></View>
        <View style={styles.text}>
          <Text>Hooola chips</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChipContent;
