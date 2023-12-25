import { FlatList, View } from "react-native";
import Styles from "../StyleHolder";

const FlatList_MyBookings = () => {
  const MyBookings_data = [
    {
      key: "1",
      title: "Electrical Socket Repair",
      price: "Rs. 500",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Baghbazaar",
    },
    {
      key: "2",
      title: "House Cleaner",
      price: "Rs. 750",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Lazimpath",
    },
    {
      key: "3",
      title: "Cooking",
      price: "Rs. 1000",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Lainchaur",
    },
    {
      key: "4",
      title: "AC Repair",
      price: "Rs. 2000",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Nakhipot",
    },
    {
      key: "5",
      title: "Carpenter Service",
      price: "Rs. 1500",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Dolahity",
    },
    {
      key: "6",
      title: "Labor Job",
      price: "Rs. 650",
      image: require("../../assets/Required Images/Placeholder.png"),
      rating: require("../../assets/Required Images/Rating.png"),
      location: "Rastrapati Bhawan",
    },
  ];

  const render_Flatlist_MyBookings = ({ item }) => (
    <View style={Styles.FlatList_MyBookingsElements_MainView}>
      <Image source={item.image} />
      <View style={Styles.FlatList_MyBookingsElements_DetailsView}>
        <Text>{item.title}</Text>
        <Text>{item.location}</Text>
        <Text>{item.price}</Text>
        <Image source={item.rating} />
      </View>
    </View>
  );
};

export default FlatList_MyBookings;
