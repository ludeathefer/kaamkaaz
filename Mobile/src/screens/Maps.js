import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import MapView, { Marker, Region } from "react-native-maps";
// import { LocationContext } from "../../hooks/context";
import Styles from "../StyleHolder";
const ViewMaps = ({ navigation }) => {
  //   const [location, setLocation] = useContext();
  const [confirmed, setConfirmed] = useState(false);

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
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {confirmed && (
        <View style={Styles.PostDetailPage_back_container}>
          <Image
            source={require("../../assets/Icons/tick-outline.png")}
            style={Styles.PostDetailPage_back}
            onPress={backHandler}
          />
        </View>
      )}
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
        <Marker
          draggable
          coordinate={{ latitude: 27.700769, longitude: 85.30014 }}
          //   coordinate={location}
          onMarkerDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
          pinColor="#FF0000"
          //   onPress={onMarkerPressed}
        />
      </MapView>
    </View>
  );
};

export default ViewMaps;
