import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import {
  movieNowPlaying,
  movie_classic,
  movie_comming,
  infoFilm,
} from "../config/constant";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  // Hooks Aux
  const [urlMovieNowPlaying, setUrlMovieNowPlaying] = useState(movieNowPlaying);
  const [urlMovieClassic, setUrlMovieClassic] = useState(movie_classic);
  const [urlMovieComming, setUrlMovieComming] = useState(movie_comming);
  const [urlInfoFilm, setUrlInfoFilm] = useState(infoFilm);

  // Hooks
  const [dataNowPlaying, setDataNowPlaying] = useState([]);
  const [dataMoviePrincipal, setDataMoviePrincipal] = useState([]);
  const [dataUrlMovieClassic, setDataUrlMovieClassic] = useState([]);
  const [dataMovieComming, setDataMovieComming] = useState([]);
  const [dataInfoFilm, setDataInfoFilm] = useState([]);

  // UseEffect
  useEffect(() => {
    getMovieNowPlaying(), getMovieClassic(), getMovieComming();
  }, []);

  // Carga al iniciar

  const getMovieNowPlaying = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlMovieNowPlaying);

      if (status == 200) {
        results && setDataMoviePrincipal(results[results.length - 1]);
        setDataNowPlaying(results);
      }
    } catch (error) {}
  };

  const getMovieClassic = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlMovieClassic);

      if (status == 200) {
        setDataUrlMovieClassic(results);
      }
    } catch (error) {}
  };

  const getMovieComming = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlMovieComming);

      if (status == 200) {
        setDataMovieComming(results);
      }
    } catch (error) {}
  };

  // Carga a solicitud
  const getInfoFilm = async (id_film) => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlInfoFilm(id_film));

      if (status == 200) {
        setDataInfoFilm(results);
      }
    } catch (error) {}
  };

  return (
    <MoviesContext.Provider
      value={{
        dataMoviePrincipal,
        dataNowPlaying,
        dataUrlMovieClassic,
        dataMovieComming,
        dataInfoFilm,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
