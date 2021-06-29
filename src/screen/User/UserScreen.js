import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Entypo";
import * as RootNavigation from "../../routes/RootNavigation";
import { LoginUserContext } from "../../contexts/LoginContextProvider";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  avatarContent: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dfe6e9",
    height: "25%",
  },
  avatar: {
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 100,
    height: "100%",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderEndColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 25,
  },
  contentFormulario: {
    marginTop: 20,
    paddingHorizontal: 25,
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
  imageCamera: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

const UserScreen = () => {
  const { store, dispatch } = useContext(LoginUserContext);

  const getInfoUser = async () => {
    await AsyncStorage.getItem("user").then((data) => {
      if (data !== null) {
        let getDataAux = JSON.parse(data);
        const { name, lastName, email, phone } = getDataAux;

        setNewName(name);
        setNewLastName(lastName);
        setNewEmail(email);
        setNewPhone(phone);
      }
    });
  };

  useEffect(() => {
    getInfoUser();
  }, [store]);

  const [newName, setNewName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();

  const enviarFormulario = () => {
    dispatch({
      type: "UPDATE_USER",
      payload: {
        name: newName,
        lastName: newLastName,
        email: newEmail,
        phone: newPhone,
      },
    });
  };

  return (
    <View style={styles.content}>
      {/* Cambiar fotográfica con camara */}
      <TouchableOpacity
        style={styles.avatarContent}
        onPress={() => RootNavigation.navigate("camera")}
      >
        <View>
          {store.avatar == "" ? (
            <View style={styles.avatar}>
              <Icon name="user" size={100} />

              <View style={styles.icon}>
                <Icon name="camera" size={20} />
                <Text> Tomar un foto</Text>
              </View>
            </View>
          ) : (
            <Image source={{ uri: store.avatar }} style={styles.imageCamera} />
          )}
        </View>
      </TouchableOpacity>

      {/* Formulario perfil usuario */}
      <View style={styles.contentFormulario}>
        <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 25 }}>
          Datos personales
        </Text>

        {/* Nombre */}
        <View>
          <Text>Nombre</Text>
          <TextInput
            autoCapitalize={"none"}
            style={styles.textInput}
            value={newName}
            onChangeText={(_name) => setNewName(_name)}
          />
        </View>

        {/* Apellido */}
        <View>
          <Text>Apellido Paterno</Text>
          <TextInput
            autoCapitalize={"none"}
            style={styles.textInput}
            value={newLastName}
            onChangeText={(_lastName) => setNewLastName(_lastName)}
          />
        </View>

        {/* Email */}
        <View>
          <Text>Email</Text>
          <TextInput
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            style={styles.textInput}
            value={newEmail}
            onChangeText={(_email) => setNewEmail(_email)}
          />
        </View>

        {/* Email */}
        <View>
          <Text>Numero telefónico</Text>
          <TextInput
            autoCapitalize={"none"}
            style={styles.textInput}
            value={newPhone}
            onChangeText={(_phone) => setNewPhone(_phone)}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContent}
            onPress={() => enviarFormulario()}
          >
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.button}>Actualizar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;
