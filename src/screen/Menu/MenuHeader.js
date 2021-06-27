import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LoginUserContext } from "../../contexts/LoginContextProvider";
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
  const { name, lastName, email, phone } = store;

  let fullName = "";

  if (name != "" && lastName != "") {
    fullName = `${name} ${lastName}`;
  } else {
    fullName = "Sin nombre";
  }

  return (
    <TouchableOpacity onPress={() => RootNavigation.navigate("perfil")}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImg}>
          <Icon name="user" size={95} />
        </View>

        <View style={styles.avatarText}>
          <Text style={{ fontSize: 21, textAlign: "center", marginBottom: 5 }}>
            {fullName}
          </Text>
          <Text style={{ fontSize: 13, textAlign: "center" }}>
            {email != "" ? email : "Sin email"}
          </Text>
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            {phone != "" ? "Cel: " + phone : ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuHeader;
