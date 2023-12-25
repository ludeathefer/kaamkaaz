import { View } from "react-native";
import FlatList_MyBookings from "./FlatList_MyBookings";
import Styles from "../StyleHolder";

const MyBookings = () => {
  return (
    <View style={Styles.container_Default}>
      <FlatList_MyBookings />
    </View>
  );
};
export default MyBookings;
