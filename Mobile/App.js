import { StyleSheet, Text, View } from "react-native";
import Styles from "./src/StyleHolder";
import MyBookings from "./src/screens/MyBookings";
import { StatusBar } from "react-native";
const statusBarHeight = StatusBar.currentHeight || 0;

export default function App() {
  return (
    <View style={[Styles.container_Default, { marginTop: statusBarHeight }]}>
      <StatusBar barStyle="light-content" backgroundColor="red" translucent />

      <MyBookings />
    </View>
  );
}
