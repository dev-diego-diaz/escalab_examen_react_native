import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { topActors, detailActor, filmActor } from "../config/constant";

export const ActorsContext = createContext();

const ActorsContextProvider = ({ children }) => {
  // Hooks Aux
  const [urlTopActors, setUrlTopActors] = useState(topActors);

  // Hooks
  const [dataTopActors, setDataTopActors] = useState([]);
  const [dataDetailActor, setDataDetailActor] = useState([]);
  const [dataFilmActor, setDataFilmActor] = useState([]);

  // UseEffect
  useEffect(() => {
    getTopActors();
  }, []);

  // Carga al iniciar

  const getTopActors = async () => {
    try {
      const {
        data: { results },
        status,
      } = await axios.get(urlTopActors);

      if (status == 200) {
        setDataTopActors(results);
      }
    } catch (error) {}
  };

  const getDetailActor = async (id_actor) => {
    try {
      const { status, data } = await axios.get(detailActor(id_actor));

      if (status == 200) {
        setDataDetailActor(data);
      }
    } catch (error) {}
  };

  const getFilmActor = async (id_actor) => {
    try {
      const {
        data: { cast },
        status,
      } = await axios.get(filmActor(id_actor));

      if (status == 200) {
        setDataFilmActor(cast);
      }
    } catch (error) {}
  };

  return (
    <ActorsContext.Provider
      value={{
        dataTopActors,
        getDetailActor,
        dataDetailActor,
        getFilmActor,
        dataFilmActor,
      }}
    >
      {children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
