import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

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
export class LoginScreen extends Component {
  render() {
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
            />
          </View>
          <View>
            <Text>Contraseña</Text>
            <TextInput
              autoCapitalize={"none"}
              secureTextEntry={true}
              style={styles.textInput}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonContent}>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={styles.button}>Ingresar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
