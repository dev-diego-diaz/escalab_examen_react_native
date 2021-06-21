import React, { Component } from "react";
import { Text, View } from "react-native";

export class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 35 }}> Login </Text>
      </View>
    );
  }
}

export default LoginScreen;
