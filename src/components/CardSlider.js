import React, { Component } from "react";
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

export class CardSlider extends Component {
  render() {
    const { titulo, data, tipo } = this.props;

    return (
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
        <FlatList
          data={data}
          renderItem={({
            item: {
              id,
              backdrop_path,
              poster_path,
              title,
              name,
              overview,
              release_date,
              first_air_date,
              vote_average,
            },
          }) => (
            <CardMultimedia
              id={id}
              background_imagen={backdrop_path}
              imagen={poster_path}
              title={title ? title : name}
              overview={overview}
              release_date={release_date ? release_date : first_air_date}
              votes={vote_average}
              tipo={tipo}
              keyExtractor={(item) => item.id}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default CardSlider;
