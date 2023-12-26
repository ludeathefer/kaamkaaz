import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import MapView, { Marker, Region, Callout } from "react-native-maps";
// import { LocationContext } from "../../hooks/context";
import Styles from "../../StyleHolder";
import { moderateScale, verticalScale } from "../../constants/measurements";
import { TouchableOpacity } from "react-native-gesture-handler";

const ViewMaps = ({ navigation }) => {
  //   const [location, setLocation] = useContext();
  const [confirmed, setConfirmed] = useState(false);
  const AcceptPressed = () => {
    console.log("Accept Pressed");
  };
  const onMarkerPressed = (event) => {
    // const { coordinate } = event.nativeEvent;
    // setConfirmed(true);
    // setLocation(coordinate);
  };

  const backHandler = (event) => {
    // Assuming you want to call onMarkerPressed before navigating
    // const { coordinate } = event.nativeEvent;
    // setLocation(coordinate);
    // console.log(location);
    // // Now, navigate to "CreatePost" with the correct coordinate
    // navigation.navigate("CreatePost", { coordinate: location });
  };
  const markers = [
    {
      id: "1",
      JobName: "Repair Fan",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem",
      coordinate: { latitude: 27.701869, longitude: 85.30014 },
    },
    {
      id: "2",
      JobName: "Clean AC",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem",
      coordinate: { latitude: 27.702779, longitude: 85.30144 },
    },
    {
      id: "3",
      JobName: "Repair blender",
      description: "Lorem Ipsum. Neque porro quisquam est qui dolorem",
      coordinate: { latitude: 27.708799, longitude: 85.30314 },
    },
    {
      id: "4",
      JobName: "Fix this pc",
      description:
        "Lorem Ipsum. Neque porro quisquam est qukljvhbklxjhbklxjvblkxchvbkljxcvhblhkjxvhbkljxcjbklx xklkvbklxjv xkbvlxjjvxb klzsjbv;ozfsvo;zsii dolorem",
      coordinate: { latitude: 27.700757, longitude: 85.30514 },
    },
  ];
  const renderMarker = () => {
    return markers.map((marker) => (
      <Marker
        key={marker.id}
        coordinate={marker.coordinate}
        // title={marker.description}
        // draggable
        onMarkerDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
        pinColor="#FF0000"
      >
        <Callout onPress={AcceptPressed}>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: moderateScale(18), fontWeight: "800" }}>
              {marker.JobName}
            </Text>
            <Text style={{ fontSize: moderateScale(14), fontWeight: "600" }}>
              {
                (marker.description =
                  marker.description.length > 40
                    ? marker.description.length > 80
                      ? marker.description.substring(0, 40) +
                        "\n" +
                        marker.description.substring(41, 75) +
                        "..."
                      : marker.description.substring(0, 40) +
                        "\n" +
                        marker.description.substring(41, 75)
                    : marker.description)
              }
            </Text>
            {/* <TouchableOpacity onPress={AcceptPressed}> */}

            {/* </TouchableOpacity> */}
          </View>
        </Callout>
      </Marker>
    ));
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* {confirmed && (
        <View style={Styles.PostDetailPage_back_container}>
          <Image
            source={require("../../../assets/Icons/tick-outline.png")}
            style={Styles.PostDetailPage_back}
            onPress={backHandler}
          />
        </View>
      )} */}
      <MapView
        style={Styles.Map_View}
        //onRegionChange={onRegionChange}
        initialRegion={{
          latitude: 27.700769,
          longitude: 85.30014,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMarker()}
      </MapView>
    </View>
  );
};

export default ViewMaps;
