import { StyleSheet, Text, View } from "react-native";
import Styles from "./src/StyleHolder";
import MyBookings_Consumer from "./src/screens/MyBookings_Consumer";
import { StatusBar } from "react-native";
import MyBookings_Provider from "./src/screens/MyBookings_Provider";
const statusBarHeight = StatusBar.currentHeight || 0;
import ViewMaps from "./src/screens/Maps";

export default function App() {
  return (
    <View style={[Styles.container_Default, { marginTop: statusBarHeight }]}>
      <StatusBar barStyle="light-content" backgroundColor="red" translucent />
      {/* <MyBookings_Provider /> */}
      {/* <MyBookings_Consumer /> */}
      <ViewMaps />
    </View>
  );
}
