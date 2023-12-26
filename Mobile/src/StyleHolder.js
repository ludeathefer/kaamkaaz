import { Dimensions, StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../src/constants/measurements";
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  container_Default: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  FlatList_MyBookings_ConsumerElements_MainView: {
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
  FlatList_MyBookings_ConsumerElements_DetailsView: {
    flex: 1,
    flexDirection: "column",
  },
  TitleText_FlatList_MyBookings_Consumer: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    // alignSelf: "flex-start",
    marginTop: verticalScale(8),
  },
  Location_FlatList_MyBookings_Consumer: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
    // alignSelf: "flex-start",
  },
  Price_Flatlist_MyBookings_Consumer: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(5),
  },
  Rating_FlatList_MyBookings_Consumer: {
    height: verticalScale(20),
    width: "100%",
    marginTop: verticalScale(5),
  },
  Image_FlatList_MyBookings_Consumer: {
    height: verticalScale(125),
    width: horizontalScale(150),
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
    borderRadius: moderateScale(20),
  },
  BackIcon_MyBookings_Consumer: {
    height: horizontalScale(40),
    width: verticalScale(40),
    tintColor: "#111111",
  },
  BottomTabBar:{
    position: 'absolute',
    bottom: verticalScale(0),
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#ffffff',
    borderBottomEndRadius: 0,
    borderTopEndRadius: moderateScale(22),
    borderTopWidth: 0,
    height: verticalScale(65),
  },
  Map_View: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
  },

  
});


export default Styles;
