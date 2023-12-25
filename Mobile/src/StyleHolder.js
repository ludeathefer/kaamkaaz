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
  TitleText_FlatList_MyBookings: {
    fontSize: moderateScale(18),
    fontWeight: "500",
  },
  Location_FlatList_MyBookings: {
    fontSize: moderateScale(14),
  },
  Price_Flatlist_MyBookings: {
    fontSize: moderateScale(14),
  },
  Rating_FlatList_MyBookings: {
    height: verticalScale(100),
    width: horizontalScale(100),
  },
  Image_FlatList_MyBookings: {},
});

export default Styles;
