import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../../StyleHolder";

const FlatList_MyBookings_Consumer = () => {
  const MyBookings_Consumer_data = [
    {
      key: "1",
      title: "Electrical Socket Repair",
      price: "Rs. 500",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Baghbazaar",
    },
    {
      key: "2",
      title: "House Cleaner",
      price: "Rs. 750",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
    },
    {
      key: "3",
      title: "Cooking",
      price: "Rs. 1000",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Lainchaur",
    },
    {
      key: "4",
      title: "AC Repair",
      price: "Rs. 2000",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Nakhipot",
    },
    {
      key: "5",
      title: "Carpenter Service",
      price: "Rs. 1500",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Dolahity",
    },
    {
      key: "6",
      title: "Labor Job",
      price: "Rs. 650",
      image: require("../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../assets/RequiredImages/Rating.png"),
      location: "Rastrapati Bhawan",
    },
  ];

  const render_Flatlist_MyBookings_Consumer = ({ item }) => (
    <View style={Styles.FlatList_MyBookings_ConsumerElements_MainView}>
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <Image
          source={item.image}
          style={Styles.Image_FlatList_MyBookings_Consumer}
        />
        <View style={Styles.FlatList_MyBookings_ConsumerElements_DetailsView}>
          <Text style={Styles.TitleText_FlatList_MyBookings_Consumer}>
            {item.title}
          </Text>
          <Text style={Styles.Location_FlatList_MyBookings_Consumer}>
            {item.location}
          </Text>
          <Text style={Styles.Price_Flatlist_MyBookings_Consumer}>
            {item.price}
          </Text>
          <Image
            source={item.rating}
            style={Styles.Rating_FlatList_MyBookings_Consumer}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={MyBookings_Consumer_data}
      renderItem={render_Flatlist_MyBookings_Consumer}
      keyExtractor={(MyBookings_ConsumerList) => MyBookings_ConsumerList.key}
      scrollEnabled={false}
      // showsVerticalScrollIndicator={true}
    />
  );
};

export default FlatList_MyBookings_Consumer;
