import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { inAirToday, inAir, topSerie, infoSerie } from "../config/constant";

export const SeriesContext = createContext();

const SeriesContextProvider = ({ children }) => {
  // Hooks Aux
  const [urlSerieInAirToday, setUrlSerieInAirToday] = useState(inAirToday);
  const [urlSerieInAir, setUrlSerieInAir] = useState(inAir);
  const [urlTopSerie, setUrlTopSerie] = useState(topSerie);
  const [urlInfoSerie, setUrlInfoSerie] = useState(infoSerie);

  // Hooks
  const [dataSerieInAirToday, setDataSerieInAirToday] = useState([]);
  const [dataSeriePrincipal, setDataSeriePrincipal] = useState([]);
  const [dataSerieInAir, setDataSerieInAir] = useState([]);
  const [dataTopSerie, setDataTopSerie] = useState([]);
  const [dataInfoSerie, setDataInfoSerie] = useState([]);

  // UseEffect
  useEffect(() => {
    getSerieInAirToday(), getSerieInAir(), getTopSerie();
  }, []);

  // Carga al iniciar

  const getSerieInAirToday = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlSerieInAirToday);

      if (status == 200) {
        results && setDataSeriePrincipal(results[results.length - 1]);
        setDataSerieInAirToday(results);
      }
    } catch (error) {}
  };

  const getSerieInAir = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlSerieInAir);

      if (status == 200) {
        setDataSerieInAir(results);
      }
    } catch (error) {}
  };

  const getTopSerie = async () => {
    console.log(urlTopSerie);

    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlTopSerie);

      if (status == 200) {
        setDataTopSerie(results);
      }
    } catch (error) {}
  };

  // Carga a solicitud
  const getInfoSerie = async (id_serie) => {
    try {
      const {
        data: { cast },
        status,
      } = await axios.get(infoSerie(id_serie));

      if (status == 200) {
        setDataInfoSerie(cast);
      }
    } catch (error) {}
  };

  return (
    <SeriesContext.Provider
      value={{
        dataSerieInAirToday,
        dataSeriePrincipal,
        dataSerieInAir,
        dataTopSerie,
        getInfoSerie,
        dataInfoSerie,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;
