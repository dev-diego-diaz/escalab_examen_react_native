import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { LoginUserContext } from "../../contexts/LoginContextProvider";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerContent: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 100,
    width: 160,
    height: 160,
  },
  body: {
    paddingHorizontal: 25,
  },
  textInput: {
    height: 40,
    borderEndColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#b33939",
    width: "100%",
    height: 40,
  },
  button: {
    color: "white",
    fontWeight: "800",
  },
});

const LoginScreen = () => {
  // Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Formulario de envio
  const enviarFormulario = () => {
    dispatch({ type: "LOG_IN", payload: { email: email, password: password } });
  };

  // Contexto
  const { store, dispatch } = useContext(LoginUserContext);
  const { errorLogin } = store;

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <View style={styles.headerContent}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Icon name="netflix" color="#c0392b" size={100} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <Text>Email</Text>
          <TextInput
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            style={styles.textInput}
            value={email}
            onChangeText={(_email) => setEmail(_email)}
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInput
            autoCapitalize={"none"}
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
            onChangeText={(_password) => setPassword(_password)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContent}
            onPress={() => enviarFormulario()}
          >
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.button}>Ingresar</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Mensaje error */}
        <View>
          <Text>{errorLogin ? "Usuario o contraseña invalido" : ""}</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
