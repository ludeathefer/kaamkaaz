import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
import { Searchbar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getUser } from "../../apiCalls";

const windowWidth = Dimensions.get("window").width;
const categoryArray = [
  {
    category: "Electrician",
    image: require("../../../assets/categoryimages/electrician.png"),
  },
  {
    category: "Barber",
    image: require("../../../assets/categoryimages/barber.png"),
  },
  {
    category: "Cleaning",
    image: require("../../../assets/categoryimages/cleaning.webp"),
  },
  {
    category: "Plumber",
    image: require("../../../assets/categoryimages/plumber.png"),
  },
  {
    category: "Carpenter",
    image: require("../../../assets/categoryimages/carpenter.png"),
  },
  {
    category: "Labourer",
    image: require("../../../assets/categoryimages/labourer.png"),
  },
  {
    category: "Painter",
    image: require("../../../assets/categoryimages/painter.png"),
  },
  {
    category: "Catering",
    image: require("../../../assets/categoryimages/cooking.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const runOnce = async () => {
    const temp = await getUser();
    setUser(temp);
  };

  useEffect(() => {
    runOnce();
  }, []);

  const CategoryItem = categoryArray.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ServiceDetail",{category:item.category});
        }}
      >
        <View
          style={{
            width: horizontalScale(160),
            height: verticalScale(132),
            borderRadius: moderateScale(10),
            backgroundColor: "#EBECED",
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Image
            source={item.image}
            resizeMode="cover"
            style={{
              height: verticalScale(60),
              width: horizontalScale(60),
              tintColor: "#153963",
            }}
          />
          <Text
            style={{
              color: "#153963",
              marginTop: verticalScale(20),
            }}
          >
            {item.category}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: verticalScale(30),
          marginLeft: horizontalScale(0),
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: moderateScale(17),
                fontFamily: "Inter-Regular",
              }}
            >
              Welcome,
            </Text>
            <Text
              style={{ fontSize: moderateScale(17), fontFamily: "Inter-Bold" }}
            >
              {user ? " " + user.name : ""}
            </Text>
          </View>
          <View style={{ width: 250 }}>
            <Text
              style={{
                flexWrap: "wrap",
                fontSize: moderateScale(14.5),
                fontFamily: "Inter-Light",
              }}
            >
              Which service do you want to use today?
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <Image source={require("../../../assets/userImage.png")} />
        </TouchableOpacity>
      </View>

      <Searchbar
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          backgroundColor: "#ededed",
          width: "92%",
          color: "black",
          alignSelf: "center",
          marginTop: verticalScale(20),
        }}
        placeholderTextColor={"#000"}
        cursorColor={"black"}
        iconColor={"black"}
        rippleColor={"black"}
        selectionColor={"white"}
        mode="bar"
      />

      <Text
        style={{
          marginLeft: horizontalScale(20),
          marginTop: verticalScale(20),
          fontSize: moderateScale(15),
          fontFamily: "Inter-Bold",
        }}
      >
        Categories
      </Text>
      <ScrollView vertical={verticalScale(600)} alwaysBounceVertical={true}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: verticalScale(75),
          }}
        >
          {CategoryItem}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
