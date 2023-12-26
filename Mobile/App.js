import {useState} from "react"
import AppLoading from 'expo-app-loading';
import { StatusBar } from "react-native";
const statusBarHeight = StatusBar.currentHeight || 0;
import { useFonts } from "./src/hooks/useFonts.js"
import { NavigationContainer } from '@react-navigation/native';
import NormalUserStack from "./src/navigation/NormalUserHomeStack.js";
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
        onError={() => { }}
      />
    );
  }


  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="red" translucent />
      <AuthStack/>
    </NavigationContainer>

  );
}
