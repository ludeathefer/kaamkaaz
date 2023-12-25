import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FlatList_MyBookings from "./FlatList_MyBookings";
import Styles from "../StyleHolder";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constants/measurements";
import { useState } from "react";

const MyBookings = () => {
  const [selectedBookingStatus, setSelectedBookingStatus] = useState(0);
  const bookingStatusArray = ["Pending", "Accepted", "Completed", "Cancelled"];
  const bookingStatusEl = bookingStatusArray.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
        }}
        onPress={() => setSelectedBookingStatus(index)}
      >
        <View
          style={{
            flex: 1,
            borderRadius: moderateScale(20),
            backgroundColor: selectedBookingStatus === index ? "green" : "red",
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Styles.container_Default}>
          <View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                height: verticalScale(50),
                width: horizontalScale(350),
                // justifyContent: "flex-start",
                // alignItems: "flex-start",
                // backgroundColor: "red",
                marginTop: verticalScale(10),
                alignItems: "center",
              },
            ]}
          >
            <Image
              source={require("../../assets/Icons/back.png")}
              style={Styles.BackIcon_MyBookings}
            />
            <Text
              style={[
                { fontSize: moderateScale(32) }, //, lineHeight: verticalScale(20) },
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
                backgroundColor: "#ff1",
                flexDirection: "row",
                width: horizontalScale(350),
                alignItems: "center",
              },
            ]}
          >
            {bookingStatusEl}
          </View>
          <View style={[{ flex: 1 }]}>
            <FlatList_MyBookings />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyBookings;
