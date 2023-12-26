import { StyleSheet, Text, View } from "react-native";
import Styles from "./src/StyleHolder";
// import MyBookings from "./src/screens/MyBookings";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import useFonts from "./src/hooks/useFonts.js";
import AuthStack from "./src/navigation/AuthStack.js";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
