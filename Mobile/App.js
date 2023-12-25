import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./src/StyleHolder";
import MyBookings from "./src/screens/MyBookings";

export default function App() {
  return (
    <View style={Styles.container_Default}>
      <MyBookings />
    </View>
  );
}
