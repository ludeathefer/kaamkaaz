import Styles from "./src/StyleHolder";
// import MyBookings from "./src/screens/MyBookings";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import useFonts from "./src/hooks/useFonts.js";
import AuthStack from "./src/navigation/AuthStack.js";
import ProfileService from "./src/screens/ServiceUser/ProfileService.js";
import CartScreen from "./src/screens/NormalUser/CartScreen.js";
import MyBookings_Provider from "./src/screens/ServiceUser/MyBookings_Provider.js";
import ViewMaps from "./src/screens/ServiceUser/Maps.js";

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
    // <ProfileService />
    // <CartScreen />
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // {/* <MyBookings_Provider /> */}
    // <ViewMaps />
  );
}
