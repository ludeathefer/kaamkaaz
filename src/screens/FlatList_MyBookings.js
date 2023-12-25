import { FlatList, View } from "react-native";
import Styles from "../StyleHolder";

const FlatList_MyBookings = () => {
  const MyBookings_data = [
    {
      key: "1",
      title: "Electrical Socket Repair",
      price: "Rs. 500",
      image: require(""),
    },
    {
      key: "2",
      title: "House Cleaner",
      price: "Rs. 750",
      image: require(""),
    },
    {
      key: "3",
      title: "Cooking",
      price: "Rs. 1000",
      image: require(""),
    },
    {
      key: "4",
      title: "AC Repair",
      price: "Rs. 2000",
      image: require(""),
    },
    {
      key: "5",
      title: "Carpenter Service",
      price: "Rs. 1500",
      image: require(""),
    },
    {
      key: "6",
      title: "Labor Job",
      price: "Rs. 650",
      image: require(""),
    },
  ];

  const render_Flatlist_MyBookings = ({ item }) => (
    <View style={Styles.FlatList_MyBookingsElements_MainView}>
      <Image />
      <View style={Styles.FlatList_MyBookingsElements_DetailsView}></View>
    </View>
  );
};

export default FlatList_MyBookings;
