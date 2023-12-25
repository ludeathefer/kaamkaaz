import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../src/constants/measurements";

const Styles = StyleSheet.create({
  container_Default: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  FlatList_MyBookingsElements_MainView: {
    flex: 1,
    flexDirection: "row",
    height: verticalScale(175),
    width: horizontalScale(350),
    backgroundColor: "#aabb22",
    marginTop: verticalScale(15),
    marginBottom: verticalScale(15),
    borderRadius: moderateScale(20),
    alignItems: "center",
    // justifyContent: "center",
  },
  FlatList_MyBookingsElements_DetailsView: {
    flex: 1,
    flexDirection: "column",
  },
  TitleText_FlatList_MyBookings: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    // alignSelf: "flex-start",
    marginTop: verticalScale(8),
  },
  Location_FlatList_MyBookings: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
    // alignSelf: "flex-start",
  },
  Price_Flatlist_MyBookings: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
  },
  Rating_FlatList_MyBookings: {
    height: verticalScale(20),
    width: "100%",
    marginTop: verticalScale(5),
  },
  Image_FlatList_MyBookings: {
    height: verticalScale(125),
    width: horizontalScale(150),
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
    borderRadius: moderateScale(20),
  },
  BackIcon_MyBookings: {
    height: horizontalScale(40),
    width: verticalScale(40),
    tintColor: "#111111",
  },
});

export default Styles;
