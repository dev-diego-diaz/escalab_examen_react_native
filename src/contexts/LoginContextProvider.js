import React, { createContext, useReducer, useState } from "react";

import * as RootNavigation from "../routes/RootNavigation";

export const LoginUserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN": {
      if (action.payload.nickname === "a" && action.payload.password === "1") {
        return {
          ...state,
          nickname: action.payload.nickname,
          name: "",
          lastName: "",
          email: "",
          phone: "",
          password: action.payload.password,
          loginActive: true,
          errorLogin: false,
        };
      } else {
        return {
          ...state,
          nickname: "",
          name: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          loginActive: false,
          errorLogin: true,
        };
      }
    }
    case "LOG_OUT": {
      return {
        ...state,
        loginActive: false,
      };
    }
    case "UPDATE_USER": {
      RootNavigation.navigate("peliculas");
      return {
        ...state,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    }
    default:
      return state;
  }
};

const defaultState = {
  nickname: "",
  name: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  loginActive: false,
  errorLogin: false,
};

const LoginContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(userReducer, defaultState);
  const [isLoading, updateIsLoading] = useState(false);

  return (
    <LoginUserContext.Provider
      value={{
        isLoading,
        store,
        dispatch,
      }}
    >
      {children}
    </LoginUserContext.Provider>
  );
};

export default LoginContextProvider;
