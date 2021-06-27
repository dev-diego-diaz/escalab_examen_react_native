import React, { useContext } from "react";
import { Button, StyleSheet } from "react-native";
import { LoginUserContext } from "../../contexts/LoginContextProvider";

const styles = StyleSheet.create({
  botonSalir: {
    position: "absolute",
    bottom: 2,
  },
});

const MenuExitButton = () => {
  const { dispatch } = useContext(LoginUserContext);

  return (
    <Button
      onPress={() =>
        dispatch({
          type: "LOG_OUT",
        })
      }
      style={styles.botonSalir}
      title="Salir"
      color="#74b9ff"
    />
  );
};

export default MenuExitButton;
