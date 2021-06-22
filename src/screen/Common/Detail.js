import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ChipContent from "../../components/ChipContent";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  posterContent: {
    flexDirection: "column",
    justifyContent: "center",
    height: "45%",
    backgroundColor: "red",
  },
  poster: {
    flexDirection: "column",
    alignSelf: "center",
    width: 180,
    height: 270,
    backgroundColor: "gray",
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
});

const Detail = () => {
  return (
    <View style={styles.content}>
      {/* Poster */}
      <View style={styles.posterContent}>
        <View style={styles.poster}></View>
        <View style={styles.contentTitulo}>
          <Text style={styles.textTitulo}>Nombre Película (2021)</Text>
        </View>
      </View>
      <ScrollView vertical>
        {/* Reseña */}
        <Text style={styles.textResumen}>
          Godzilla y Kong, dos de las fuerzas más poderosas de un planeta
          habitado por todo tipo de aterradoras criaturas, se enfrentan en un
          espectacular combate que sacude los cimientos de la humanidad. Monarch
          (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo
          hacia territorios inexplorados para descubrir los orígenes de estos
          dos titanes, en un último esfuerzo por tratar de salvar a dos bestias
          que parecen tener las horas contadas sobre la faz de la Tierra.
        </Text>

        <View style={styles.extraContent}>
          <Text style={styles.textExtra}>Titulo de seccón</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ChipContent key={1} />
            <ChipContent key={2} />
            <ChipContent key={3} />
            <ChipContent key={4} />
            <ChipContent key={5} />
            <ChipContent key={6} />
            <ChipContent key={7} />
            <ChipContent key={8} />
            <ChipContent key={9} />
            <ChipContent key={10} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
