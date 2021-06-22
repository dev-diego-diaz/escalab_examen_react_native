import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardSlider from "../../components/CardSlider";
import CardPrincipal from "../../components/CardPrincipal";

const MoviesScreen = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <CardPrincipal />
      <CardSlider key={1} titulo={"Titulo para sección 1"} />
      <CardSlider key={2} titulo={"Titulo para sección 2"} />
      <CardSlider key={3} titulo={"Titulo para sección 2"} />
    </ScrollView>
  );
};

export default MoviesScreen;
