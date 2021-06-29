import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import * as RootNavigation from "../../routes/RootNavigation";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  bottomButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  captureButtonContainer: {
    width: 70,
    height: 70,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  captureInnerButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});

const InterfaceCamera = ({ camera, takePicture, changeCamera }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}></View>
    <View style={styles.bottomButtons}>
      {/* Boton voler */}
      <TouchableOpacity onPress={() => RootNavigation.navigate("perfil")}>
        <Icon name="keyboard-backspace" color={"white"} size={40} />
      </TouchableOpacity>

      {/* Boton Capturar */}
      <TouchableOpacity
        style={styles.captureButtonContainer}
        onPress={() => takePicture(camera)}
      >
        <View style={styles.captureInnerButtonContainer} />
      </TouchableOpacity>

      {/* Opción de galeria */}
      <TouchableOpacity onPress={() => changeCamera()}>
        <IconIonicons name="camera-reverse-sharp" color={"white"} size={40} />
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default InterfaceCamera;
