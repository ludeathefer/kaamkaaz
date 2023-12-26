import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../constants/measurements";
import Styles from "../../StyleHolder";

const CartScreen = () => {
  const backBookingHandler = () => {
    console.log("Back Button Pressed");
  };
  const onProfilePicClicked = () => {
    console.log("Profile Icon clicked");
  };
  const CartData = [
    {
      key: "1",
      title: "Electrical Socket Repair",
      price: "Rs. 500",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Baghbazaar",
      date: "2080/08/07",
    },
    {
      key: "2",
      title: "House Cleaner",
      price: "Rs. 750",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Near Gairidhara, Gyandeep Marg, opposite of himsudha Colony",
      date: "2080/08/07",
    },
    {
      key: "3",
      title: "Cooking",
      price: "Rs. 1000",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Lainchaur",
      date: "2080/08/07",
    },
    {
      key: "4",
      title: "AC Repair",
      price: "Rs. 2000",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Nakhipot",
      date: "2080/08/07",
    },
    {
      key: "5",
      title: "Carpenter Service",
      price: "Rs. 1500",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Dolahity",
      date: "2080/08/07",
    },
    {
      key: "6",
      title: "Labor Job",
      price: "Rs. 650",
      image: require("../../../assets/RequiredImages/Placeholder.png"),
      rating: require("../../../assets/RequiredImages/Rating.png"),
      location: "Rastrapati Bhawan",
      date: "2080/08/07",
    },
  ];
  const CartScreen = CartData.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
          borderRadius: moderateScale(20),
          // backgroundColor: selectedBookingStatus === index ? "green" : "#ff1",
          justifyContent: "center",
        }}
        onPress={() => setSelectedBookingStatus(index)}
      >
        <Text style={{ alignSelf: "center" }}>{item}</Text>
      </TouchableOpacity>
    );
  });

  const render_Cart_flatlist = ({ item }) => (
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
          <Text style={{ fontWeight: "700" }}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{}}>
      <StatusBar />
      <ScrollView style={{ height: "83%", marginBottom: verticalScale(10) }}>
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
            My Cart
          </Text>
          <TouchableOpacity onPress={onProfilePicClicked}>
            <Image
              source={require("../../../assets/userImage.png")}
              style={{
                marginLeft: horizontalScale(140),
                marginTop: moderateScale(5),
                height: verticalScale(50),
                width: verticalScale(50),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            { flex: 1, marginTop: verticalScale(10), alignItems: "center" },
          ]}
        >
          <FlatList
            data={CartData}
            renderItem={render_Cart_flatlist}
            keyExtractor={(MyCart) => MyCart.key}
            scrollEnabled={false}
            // showsVerticalScrollIndicator={true}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          height: verticalScale(50),
          width: horizontalScale(300),
          alignSelf: "center",
        }}
      >
        <View
          style={{
            zIndex: 10,
            backgroundColor: "#153963",
            height: verticalScale(50),
            width: horizontalScale(300),
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: moderateScale(25),
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: moderateScale(16),
              fontWeight: "700",
            }}
          >
            Checkout
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;
