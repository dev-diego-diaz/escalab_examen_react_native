import React, { createContext, useReducer, useState } from "react";

export const LoginUserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN": {
      if (
        action.payload.email === "email@diego.cl" &&
        action.payload.password === "12345"
      ) {
        return {
          ...state,
          email: action.payload.email,
          password: action.payload.password,
          loginActive: true,
          errorLogin: false,
        };
      } else {
        return {
          ...state,
          email: null,
          password: null,
          loginActive: false,
          errorLogin: true,
        };
      }
    }
    case "LOG_OUT": {
      return {
        ...state,
        email: null,
        password: null,
        loginActive: false,
        errorLogin: false,
      };
    }
    default:
      return state;
  }
};

const defaultState = {
  email: null,
  password: null,
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
