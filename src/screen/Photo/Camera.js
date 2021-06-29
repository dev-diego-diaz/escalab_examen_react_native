import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { RNCamera } from "react-native-camera";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InterfaceCamera from "../../components/camera/InterfaceCamera";
import * as RootNavigation from "../../routes/RootNavigation";

import { LoginUserContext } from "../../contexts/LoginContextProvider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraStatusContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  cameraStatusText: { fontSize: 30, color: "white" },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  imageCamera: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

const CameraStatus = ({ message }) => (
  <View style={styles.cameraStatusContainer}>
    <Text style={styles.cameraStatusText}>{message}</Text>
  </View>
);

const Camera = () => {
  const { dispatch } = useContext(LoginUserContext);

  const [backCamera, setBackCamera] = useState(false);
  const [backCameraConf, setBackCameraConf] = useState();

  const changeCamera = () => {
    setBackCamera(!backCamera);

    if (backCamera) {
      setBackCameraConf(RNCamera.Constants.Type.back);
    } else {
      setBackCameraConf(RNCamera.Constants.Type.front);
    }
  };

  const { top } = useSafeAreaInsets();

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    if (data.uri) {
      dispatch({
        type: "TAKE_PHOTO",
        payload: { avatar: data.uri },
      });
      RootNavigation.navigate("perfil");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: top }]}>
      <RNCamera
        style={styles.camera}
        type={backCameraConf}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
      >
        {({ camera, status }) => {
          if (status === "NOT_AUTHORIZED") {
            return <CameraStatus message="No Autorizado" />;
          }

          if (status === "PENDING_AUTHORIZATION") {
            return <CameraStatus message="Pendiente" />;
          }

          if (status === "READY") {
            return (
              <InterfaceCamera
                camera={camera}
                takePicture={takePicture}
                changeCamera={changeCamera}
              />
            );
          }
        }}
      </RNCamera>
    </SafeAreaView>
  );
};

export default Camera;
