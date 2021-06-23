import React, { useContext } from "react";
import { ScrollView } from "react-native";
import CardSlider from "../../components/CardSlider";
import CardPrincipal from "../../components/CardPrincipal";

import { MoviesContext } from "../../contexts/MoviesContextProvider";

const MoviesScreen = () => {
  const {
    dataMoviePrincipal,
    dataNowPlaying,
    dataUrlMovieClassic,
    dataMovieComming,
  } = useContext(MoviesContext);

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <CardPrincipal nombre={"películas"} data={dataMoviePrincipal} />
      <CardSlider key={1} titulo={"Continuar viendo"} data={dataNowPlaying} />
      <CardSlider key={2} titulo={"Cine clasico"} data={dataUrlMovieClassic} />
      <CardSlider
        key={3}
        titulo={"Próximos estrenos"}
        data={dataMovieComming}
      />
    </ScrollView>
  );
};

export default MoviesScreen;
