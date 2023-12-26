import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../constants/measurements";
import Styles from "../../StyleHolder";

const MyBookings_Provider = ({navigation}) => {
  const [selectedBookingStatusProvider, setSelectedBookingStatusProvider] =
    useState(0);

  const bookingStatusDataProvider = [
    [
      {
        key: "1",
        title: "Pectrical Socket Repair",
        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Baghbazaar",
        date: "2080/09/14",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
        date: "2080/09/14",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        date: "2080/09/14",

        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        date: "2080/09/14",

        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Rastrapati Bhawan",
      },
    ],

    [
      {
        key: "1",
        title: "Coomer Socket Repair",
        date: "2080/09/14",

        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        date: "2080/09/14",

        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        date: "2080/09/14",

        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Rastrapati Bhawan",
      },
    ],
    [
      {
        key: "1",
        title: "Chinese Socket Repair",
        price: "Rs. 500",
        date: "2080/09/14",

        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        date: "2080/09/14",

        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating.png"),
        date: "2080/09/14",

        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        date: "2080/09/14",

        rating: require("../../../assets/RequiredImages/Rating.png"),
        location: "Rastrapati Bhawan",
      },
    ],
  ];
  const BookingStatusProviderArray = ["Pending", "Completed", "Cancelled"];
  const BookingStatusProvider = BookingStatusProviderArray.map(
    (item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            flex: 1,
            borderRadius: moderateScale(20),
            backgroundColor:
              selectedBookingStatusProvider === index ? "#ffffff" : "#CDCDCD",
            justifyContent: "center",
          }}
          onPress={() => setSelectedBookingStatusProvider(index)}
        >
          <Text style={{ alignSelf: "center" }}>{item}</Text>
        </TouchableOpacity>
      );
    }
  );
  const backBookingHandler_Consumer = () => {
    console.log("BackPressed On Consumer Booking Page");
  };

  const render_Flatlist_MyBookings_Provider = ({ item }) => (
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
          <Text style={{ fontWeight: "600" }}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            {
              flex: 1,
              flexDirection: "row",
              height: verticalScale(50),
              width: horizontalScale(350),
              marginTop: verticalScale(25),
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity onPress={backBookingHandler_Consumer}>
            <Image
              source={require("../../../assets/Icons/back.png")}
              style={Styles.BackIcon_MyBookings_Consumer}
            />
          </TouchableOpacity>
          <Text
            style={[
              { fontSize: moderateScale(32), marginLeft: verticalScale(10) }, //, lineHeight: verticalScale(20) },
            ]}
          >
            My Bookings
          </Text>
        </View>
        <View
          style={[
            {
              flex: 1,
              height: verticalScale(30),
              backgroundColor: "#CDCDCD",
              flexDirection: "row",
              width: "auto",
              alignItems: "center",
              marginTop: verticalScale(10),
            },
          ]}
        >
          {BookingStatusProvider}
        </View>
        <View
          style={[
            { flex: 1, marginTop: verticalScale(10), alignItems: "center" },
          ]}
        >
          <FlatList
            data={bookingStatusDataProvider[selectedBookingStatusProvider]}
            renderItem={render_Flatlist_MyBookings_Provider}
            keyExtractor={(MyBookings_ConsumerList) =>
              MyBookings_ConsumerList.key
            }
            scrollEnabled={false}
            // showsVerticalScrollIndicator={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyBookings_Provider;
