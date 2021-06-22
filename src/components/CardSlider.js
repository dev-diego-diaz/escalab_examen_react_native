import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardMultimedia from "./CardMultimedia";

const styles = StyleSheet.create({
  content: {
    padding: 5,
  },
  titulo: {
    fontSize: 17,
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 3,
    fontWeight: "bold",
  },
  card: {
    marginRight: 100,
  },
});

const CardSlider = ({ titulo }) => {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <ScrollView
        style={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CardMultimedia key={1} />
        <CardMultimedia key={2} />
        <CardMultimedia key={3} />
        <CardMultimedia key={4} />
        <CardMultimedia key={5} />
        <CardMultimedia key={6} />
        <CardMultimedia key={7} />
        <CardMultimedia key={8} />
        <CardMultimedia key={9} />
        <CardMultimedia key={10} />
      </ScrollView>
    </View>
  );
};

export default CardSlider;
