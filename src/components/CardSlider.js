import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
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

const CardSlider = ({ titulo, data }) => {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        data={data}
        renderItem={({ item: { poster_path, title, vote_average } }) => (
          <CardMultimedia
            imagen={poster_path}
            title={title}
            votes={vote_average}
            keyExtractor={(item) => item.id}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardSlider;
