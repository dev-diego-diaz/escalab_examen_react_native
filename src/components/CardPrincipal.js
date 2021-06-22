import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  content: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 350,
    backgroundColor: "#bdc3c7",
  },
  contentControlsWrap: {
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttomControls: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const CardPrincipal = ({ nombre }) => {
  return (
    <View style={styles.content}>
      {/* Imagen principal */}
      <View style={styles.image}></View>

      {/* Controles */}
      <View style={styles.contentControlsWrap}>
        <View style={styles.contentControls}>
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.buttomControls}>
              <Icon style={{ fontSize: 30 }} name="add" color="#ecf0f1" />
              <Text style={{ fontSize: 17, color: "#ecf0f1" }}>
                Mis {nombre}
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {}}>
            <View style={styles.buttomControls}>
              <Icon
                style={{ fontSize: 30 }}
                name="play-arrow"
                color="#ecf0f1"
              />
              <Text style={{ fontSize: 17, color: "#ecf0f1" }}>Reproducir</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default CardPrincipal;
