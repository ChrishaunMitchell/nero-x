
/// <reference types="nativewind/types" />
import React from "react";
import { View, Text } from "react-native";
import Welcome from "./src/screens/welcome/Welcome";
import { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigator/RootNavigator";

export default function App() {
  return (
    <View>
      <Welcome/>
    </View>
  );
}
