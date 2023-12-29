import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
const statusBarHeight = StatusBar.currentHeight || 0;

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: verticalScale(10),
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#555252"
        translucent
      />

      <ScrollView>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Image
            source={require("../../../assets/RequiredImages/CoverImage.jpg")}
            style={{ height: verticalScale(200), width: horizontalScale(400) }}
            resizeMode="stretch"
          />
        </View>
        {/* <View style={{ alignSelf: "center", flexDirection: "row" }}> */}
        <Image
          source={require("../../../assets/profileImage.jpg")}
          style={{
            height: verticalScale(180),
            width: horizontalScale(180),
            top: verticalScale(-90),
            borderRadius: moderateScale(20),
            alignSelf: "center",
          }}
        />
        {/* </View> */}
        <View
          style={{
            marginTop: verticalScale(-80),
            color: "#000",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: moderateScale(28),
              lineHeight: 50,
            }}
          >
            Mukunda Dev
          </Text>
          <Text
            style={{
              fontWeight: "800",
              alignSelf: "flex-start",
              marginLeft: horizontalScale(20),
              lineHeight: verticalScale(20),
            }}
          >
            Sanepa, Kupondole
          </Text>
          <Text
            style={{
              // fontWeight: "600",
              alignSelf: "flex-start",
              marginLeft: horizontalScale(20),
              lineHeight: verticalScale(20),
            }}
          >
            9857478467
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
        >
          <View
            style={{
              width: horizontalScale(300),
              height: verticalScale(55),
              backgroundColor: "#153963",
              justifyContent: "center",
              borderRadius: moderateScale(15),
              marginVertical: 15,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: moderateScale(14),
                fontFamily: "Inter-Bold",
                color: "#fff",
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* <StatusBar color:"red" /> */}
    </SafeAreaView>
  );
};
export default ProfileScreen;
