import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { urlImagen } from "../../config/constant";
import ChipContent from "../../components/ChipContent";
import { ActorsContext } from "../../contexts/ActorsContextProvider";

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
});

const DetailActor = ({ route: { params } }) => {
  const { id, name, avatar } = params;

  const { getDetailActor, dataDetailActor, getFilmActor, dataFilmActor } =
    useContext(ActorsContext);

  const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const { birthday, place_of_birth, biography } = dataDetailActor;

  const fechaNacimiento = `${new Date(birthday).getDay()} de ${
    MESES[new Date(birthday).getMonth()]
  } de ${new Date(birthday).getFullYear()}`;

  const Chips = (
    <FlatList
      data={dataFilmActor}
      renderItem={({ item: { id, title, poster_path } }) => (
        <ChipContent
          key={id}
          id={id}
          name={title}
          avatar={poster_path}
          url={false}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );

  useEffect(() => {
    getDetailActor(id), getFilmActor(id);
  }, [id]);

  return (
    <View style={styles.content}>
      <View style={styles.posterContent}>
        <View>
          <Image
            source={{ uri: `${urlImagen}${avatar}` }}
            style={{ resizeMode: "cover", width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.contentTitulo}>
          <Text style={styles.textTitulo}>{name}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#535c68",
            width: "50%",
            paddingVertical: 5,
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white" }}>
            {fechaNacimiento}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#535c68",
            width: "50%",
            paddingVertical: 5,
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white" }}>
            {place_of_birth}
          </Text>
        </View>
      </View>

      <ScrollView vertical>
        <Text style={{ padding: 10, textAlign: "justify" }}>
          {biography == "" ? "Sin información biográfica" : biography}
        </Text>

        {/* Reseña + Chips */}
        <View style={styles.extraContent}>
          <Text style={styles.textExtra}>Filmografía</Text>
          {Chips}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailActor;
