import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";

import { urlImagen } from "../../config/constant";
import ChipContent from "../../components/ChipContent";

import { SeriesContext } from "../../contexts/SeriesContextProvider";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  posterContent: {
    flexDirection: "column",
    justifyContent: "center",
    height: "45%",
  },
  poster: {
    flexDirection: "column",
    alignSelf: "center",
    width: 180,
    height: 270,
    borderRadius: 5,
  },
  contentTitulo: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 40,
    width: "100%",
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
  },
  textTitulo: {
    textAlign: "center",
    color: "white",
    fontWeight: "900",
  },
  textResumen: {
    paddingHorizontal: 20,
    paddingTop: 20,
    textAlign: "justify",
  },
  extraContent: {
    padding: 20,
  },
  textExtra: {
    marginBottom: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

const Detail = ({ route: { params } }) => {
  const { getInfoSerie, dataInfoSerie } = useContext(SeriesContext);
  const { id, background_imagen, imagen, title, overview, release_date } =
    params;

  const Chips = (
    <FlatList
      data={dataInfoSerie}
      renderItem={({ item: { id, name, profile_path } }) => (
        <ChipContent
          key={id}
          id={id}
          name={name}
          avatar={profile_path}
          url={true}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );

  useEffect(() => {
    getInfoSerie(id);
  }, [id]);

  return (
    <View style={styles.content}>
      {/* Poster */}
      <View style={styles.posterContent}>
        <ImageBackground
          source={{ uri: `${urlImagen}${background_imagen}` }}
          style={styles.image}
        >
          <View style={styles.poster}>
            <Image
              source={{ uri: `${urlImagen}${imagen}` }}
              style={{ width: 180, height: 270 }}
            />
          </View>
          <View style={styles.contentTitulo}>
            <Text style={styles.textTitulo}>
              {title} [{new Date(release_date).getFullYear()}]
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* Reseña + Chips */}
      <ScrollView vertical>
        <Text style={styles.textResumen}>{overview}</Text>
        <View style={styles.extraContent}>
          <Text style={styles.textExtra}>Reparto</Text>
          {Chips}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
