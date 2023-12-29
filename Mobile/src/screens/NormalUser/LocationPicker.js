import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
import React, { useState, useContext } from "react";
import { Image } from "react-native-elements";
import MapView, { Marker, Region } from "react-native-maps";
import styles from "../../StyleHolder";
import { LocationContext } from "../../hooks/context";
import { color } from "react-native-elements/dist/helpers";

const { width, height } = Dimensions.get("window");

const LocationPicker = ({ navigation }) => {
  const [location, setLocation] = useContext(LocationContext);
  const [confirmed, setConfirmed] = useState(false);

  const onMarkerPressed = (event) => {
    const { coordinate } = event.nativeEvent;
    setConfirmed(true);
    setLocation(coordinate);
  };

  const backHandler = (event) => {
    // Assuming you want to call onMarkerPressed before navigating

    const { coordinate } = event.nativeEvent;
    setLocation(coordinate);
    console.log(location);
    // Now, navigate to "CreatePost" with the correct coordinate
    navigation.navigate("CreatePost", { coordinate: location });
  };
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
     {confirmed&& <TouchableOpacity
        style={{
          position: "absolute",
          marginTop: verticalScale(50),
          marginLeft: horizontalScale(10),
          zIndex: 5,
          padding: 5,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../../assets/Icons/tick-outline.png")}
          style={{
            height: verticalScale(42),
            width: horizontalScale(40),
          }}
          tintColor="white"
        />
      </TouchableOpacity>
}
      <MapView
        style={styles.Map_View}
        initialRegion={{
          latitude: 27.700769,
          longitude: 85.30014,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={location||{
            latitude: 27.700769,
            longitude: 85.30014,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onMarkerDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
          pinColor="#FF0000"
          onPress={onMarkerPressed}
        />
      </MapView>
    </View>
  );
};

export default LocationPicker;
