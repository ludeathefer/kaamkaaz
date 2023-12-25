import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "./Constants/measurements";

const Styles = StyleSheet.create({
  container_Default: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  FlatList_MyBookingsElements_MainView: {
    flex: 1,
    flexDirection: "row",
  },
  FlatList_MyBookingsElements_DetailsView: {
    flex: 1,
    flexDirection: "column",
  },
});

export default Styles;
