import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import Styles from "../../StyleHolder";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
import React, { useState } from "react";
const statusBarHeight = StatusBar.currentHeight || 0;

const NormalBooking = () => {
  const [selectedBookingStatus, setSelectedBookingStatus] = useState(0);
  const onProfilePicClicked = () => {
    console.log("Profile Icon on My Bookings Clicked");
  };
  const bookingStatusArray = ["Pending", "Accepted", "Completed", "Cancelled"];
  const bookingStatusData = [
    [
      {
        key: "1",
        title: "Electrical Socket Repair",
        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Rastrapati Bhawan",
      },
    ],
    [
      {
        key: "1",
        title: "Boomer Socket Repair",
        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Rastrapati Bhawan",
      },
    ],
    [
      {
        key: "1",
        title: "Coomer Socket Repair",
        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 1500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Rastrapati Bhawan",
      },
    ],
    [
      {
        key: "1",
        title: "Chinese Socket Repair",
        price: "Rs. 500",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Baghbazaar",
      },
      {
        key: "2",
        title: "House Cleaner",
        price: "Rs. 750",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      },
      {
        key: "3",
        title: "Cooking",
        price: "Rs. 1000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Lainchaur",
      },
      {
        key: "4",
        title: "AC Repair",
        price: "Rs. 2000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Nakhipot",
      },
      {
        key: "5",
        title: "Carpenter Service",
        price: "Rs. 15000",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Dolahity",
      },
      {
        key: "6",
        title: "Labor Job",
        price: "Rs. 650",
        image: require("../../../assets/RequiredImages/Placeholder.png"),
        rating: require("../../../assets/RequiredImages/Rating3.png"),
        location: "Rastrapati Bhawan",
      },
    ],
  ];
  const backBookingHandler = () => {
    console.log("Back Button Pressed");
  };
  const bookingStatusEl = bookingStatusArray.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
          borderRadius: moderateScale(20),
          backgroundColor:
            selectedBookingStatus === index ? "#ffffff" : "#CDCDCD",
          justifyContent: "center",
        }}
        onPress={() => setSelectedBookingStatus(index)}
      >
        <Text style={{ alignSelf: "center" }}>{item}</Text>
      </TouchableOpacity>
    );
  });

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
    <SafeAreaView
    //style={{ marginTop: statusBarHeight }}
    >
      <StatusBar />
      <ScrollView>
        <View
          style={[
            {
              flex: 1,
              flexDirection: "row",
              height: verticalScale(50),
              width: horizontalScale(350),
              marginTop: verticalScale(10),
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity onPress={backBookingHandler}>
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
          <TouchableOpacity onPress={onProfilePicClicked}>
            <Image
              source={require("../../../assets/userImage.png")}
              style={{
                marginLeft: horizontalScale(69),
                marginTop: moderateScale(5),
                height: verticalScale(50),
                width: verticalScale(50),
              }}
            />
          </TouchableOpacity>
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
          {bookingStatusEl}
        </View>
        <View
          style={[
            { flex: 1, marginTop: verticalScale(10), alignItems: "center" },
          ]}
        >
          <FlatList
            data={bookingStatusData[selectedBookingStatus]}
            renderItem={render_Flatlist_MyBookings_Consumer}
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
export default NormalBooking;
