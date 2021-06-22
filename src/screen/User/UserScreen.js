import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
  },
  avatarContent: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dfe6e9",
    height: "30%",
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
});

const UserScreen = () => {
  return (
    <View style={styles.content}>
      {/* Cambiar fotográfica con camara */}
      <TouchableOpacity style={styles.avatarContent} onPress={() => {}}>
        <View>
          <View style={styles.avatar}>
            <Icon name="user" size={150} />
            <View style={styles.icon}>
              <Icon name="camera" size={20} />
              <Text> Tomar un foto</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Formulario perfil usuario */}
      <View style={styles.contentFormulario}>
        <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 25 }}>
          Datos personales
        </Text>
        <View>
          <Text>Nombre</Text>
          <TextInput autoCapitalize={"none"} style={styles.textInput} />
        </View>
        <View>
          <Text>Apellido Paterno</Text>
          <TextInput autoCapitalize={"none"} style={styles.textInput} />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            style={styles.textInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContent}>
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
