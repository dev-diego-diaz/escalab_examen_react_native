import React from "react";
import { ScrollView } from "react-native";
import CardSlider from "../../components/CardSlider";
import CardPrincipal from "../../components/CardPrincipal";

const SeriesScreen = () => {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <CardPrincipal nombre={"series"} />
      <CardSlider key={1} titulo={"Titulo para sección 1"} />
      <CardSlider key={2} titulo={"Titulo para sección 2"} />
      <CardSlider key={3} titulo={"Titulo para sección 2"} />
    </ScrollView>
  );
};

export default SeriesScreen;
