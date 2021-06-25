import React, { useContext } from "react";
import { ScrollView } from "react-native";
import CardSlider from "../../components/CardSlider";
import CardPrincipal from "../../components/CardPrincipal";

import { SeriesContext } from "../../contexts/SeriesContextProvider";

const SeriesScreen = () => {
  const {
    dataSerieInAirToday,
    dataSeriePrincipal,
    dataSerieInAir,
    dataTopSerie,
  } = useContext(SeriesContext);

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <CardPrincipal nombre={"series"} data={dataSeriePrincipal} />
      <CardSlider
        key={1}
        titulo={"Series al aire"}
        data={dataSerieInAirToday}
        tipo={"Serie"}
      />
      <CardSlider
        key={2}
        titulo={"Series"}
        data={dataSerieInAir}
        tipo={"Serie"}
      />
      <CardSlider
        key={3}
        titulo={"Top series"}
        data={dataTopSerie}
        tipo={"Serie"}
      />
    </ScrollView>
  );
};

export default SeriesScreen;
