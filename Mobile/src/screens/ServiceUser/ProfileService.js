import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
const statusBarHeight = StatusBar.currentHeight || 0;

const ProfileService = () => {
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
            Plumber
          </Text>
          <Text
            style={{
              // fontWeight: "600",
              alignSelf: "flex-start",
              marginLeft: horizontalScale(20),
              lineHeight: verticalScale(20),
            }}
          >
            Sanepa
          </Text>

          <View
            style={{
              // flex: 1,
              flexDirection: "row",
              alignItems: "stretch",
              //   justifyContent: "center",
              marginTop: verticalScale(15),
              height: verticalScale(30),
              width: horizontalScale(300),
            }}
          >
            <Image
              source={require("../../../assets/RequiredImages/Rating3.png")}
              style={{
                width: horizontalScale(80),
                // resizeMode: "cover",
                //   tintColor: "#fff111",
                //   backgroundColor: "#fff111",
                alignSelf: "flex-start",
                // position: "absolute",
                // top: 100,
                // marginLeft: horizontalScale(10),
                height: verticalScale(20),
                marginLeft: horizontalScale(-15),
              }}
            />
            <Text style={{ color: "#555252" }}>3.0 (75 Reviews)</Text>
          </View>
        </View>
        <View
          style={{
            //   flex: 1,
            borderRadius: moderateScale(25),
            height: verticalScale(150),
            marginLeft: horizontalScale(20),
            marginRight: horizontalScale(20),
            // marginBottom: verticalScale(20),
            // bottom: verticalScale(20),
            backgroundColor: "#d2d2d2",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              marginLeft: horizontalScale(10),
              marginRight: horizontalScale(10),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              {"\n"}Number of Jobs {"\n"}Done{"\n"}
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#309E8B",
                fontSize: moderateScale(14),
              }}
            >
              20
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: horizontalScale(10),
              marginRight: horizontalScale(10),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              {"\n"} Years of{"\n"} Experience{"\n"}
            </Text>
            <Text
              style={{
                fontWeight: "800",
                color: "#309E8B",
                fontSize: moderateScale(14),
              }}
            >
              5
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "800",
            fontSize: moderateScale(16),
            marginLeft: horizontalScale(20),
            marginTop: verticalScale(20),
            marginBottom: verticalScale(20),
          }}
        >
          Certification
        </Text>
        <Image
          source={require("../../../assets/RequiredImages/Certification.png")}
          style={{ alignSelf: "center", marginBottom: verticalScale(40) }}
        />
      </ScrollView>
      {/* <StatusBar color:"red" /> */}
    </SafeAreaView>
  );
};
export default ProfileService;
