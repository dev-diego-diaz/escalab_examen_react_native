import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LoginUserContext } from "../../contexts/LoginContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../../routes/RootNavigation";
import Icon from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  avatarImg: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  avatarText: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
});

const MenuHeader = () => {
  const { store } = useContext(LoginUserContext);

  const [name, setName] = useState("Sin nombre");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Sin email");
  const [phone, setPhone] = useState("xxx");

  const getInfoUser = async () => {
    await AsyncStorage.getItem("user").then((data) => {
      if (data !== null) {
        let getDataAux = JSON.parse(data);
        const { name, lastName, email, phone } = getDataAux;

        setName(name);
        setLastName(lastName);
        setEmail(email);
        setPhone(phone);
      }
    });
  };

  useEffect(() => {
    getInfoUser();
  }, [store]);

  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate("perfil")}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImg}>
          <Icon name="user" size={95} />
        </View>

        <View style={styles.avatarText}>
          <Text style={{ fontSize: 21, textAlign: "center", marginBottom: 5 }}>
            {name} {lastName}
          </Text>
          <Text style={{ fontSize: 13, textAlign: "center" }}>{email}</Text>
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            Cel: {phone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuHeader;
