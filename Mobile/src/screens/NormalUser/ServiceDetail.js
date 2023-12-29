import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/measurements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LocationContext } from "../../hooks/context";
import { createRequest } from "../../apiCalls";

const subDetails = {
  Electrician:[
  { name: "Power Socket Repair", id: "1" },
  { name: "Inverter Repair", id: "2" },
  { name: "Heater Repair", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
],
  Barber:[
  { name: "Hair Trimming", id: "1" },
  
  { name: "Fancying (dyeing, curling)", id: "2" },
 
],
  Cleaning:[
  { name: "Entire House", id: "1" },
  { name: "Kitchen", id: "2" },
  { name: "Room", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
],
  Plumber:[
  { name: "Kitchen Sink Installation", id: "1" },
  { name: "Bathroom plumbing", id: "2" },
  { name: "Sink Repair", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
],
  Carpenter:[
  { name: "Fix old furniture", id: "1" },
  { name: "Door", id: "2" },
  { name: "Windows", id: "3" },
  { name: "Chairs, tables", id: "4" },
  { name: "Bed", id: "5" },
],
  Labourer:[
  { name: "Plaster", id: "1" },
  { name: "Carry stuff", id: "2" },
  { name: "Heater Repair", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
],
  Painter:[
  { name: "Entire House", id: "1" },
  { name: "Interior only", id: "2" },
  { name: "Exterior only", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
],
  Catering:[
  { name: "Small party", id: "1" },
  { name: "Bigger party", id: "2" },
  { name: "Puja", id: "3" },
  { name: "Lighting Repair", id: "4" },
  { name: "MCB Replacement", id: "5" },
]
};

const ListItem = ({ item, selected, onPress, onLongPress }) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItem}
    >
      <View style={{ paddingVertical: 14, paddingHorizontal: 8 }}>
        <Text style={{ fontSize: 22, color: "#fff" }}>{item.name}</Text>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);

const ServiceDetail = ({ navigation , route}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useContext(LocationContext);
  const [services, setServices] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const {category} = route.params
 
  const data= subDetails[category]
  const handleOnPress = (contact) => {
    if (selectedItems.length) {
      return selectItems(contact);
    }
    console.log("pressed");
  };
  
  const getSelected = (contact) => selectedItems.includes(contact.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = (item) => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        (listItem) => listItem !== item.id
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker();
    }
  };

  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start" }}
    >
      <Text
        style={{
          marginTop: verticalScale(50),
          marginLeft: horizontalScale(60),
          fontFamily: "Inter-SemiBold",
          fontSize: moderateScale(32),
        }}
      >
        {category}
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          marginTop: verticalScale(50),
          marginLeft: horizontalScale(10),
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../../assets/backButton.png")}
          style={{ height: verticalScale(42), width: horizontalScale(40) }}
        />
      </TouchableOpacity>

      <Text
        style={{
          marginLeft: horizontalScale(30),
          marginTop: verticalScale(50),
          fontSize: moderateScale(16),
          fontFamily: "Inter-SemiBold",
        }}
      >
        Description
      </Text>

      <TextInput
        style={{
          width: "82%",
          borderBottomColor: "#153693",
          borderBottomWidth: 1,
          alignSelf: "center",
          marginTop: verticalScale(25),
          fontFamily: "Inter-Regular",
          fontSize: moderateScale(16),
        }}
        value={description}
        onChangeText={(e) => setDescription(e)}
        multiline={true}
        cursorColor={"#153693"}
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity onPress={() => navigation.navigate("LocationPicker")}>
        {location && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: verticalScale(20),
              marginLeft: horizontalScale(20),
            }}
          >
            <Text
              style={{
                color: "#767676",
                textAlign: "left",
                fontSize: 15,
                fontWeight: "900",
              }}
            >
              Location:{" "}
              {` Latitude: ${
                Math.floor(location.latitude * 100) / 100
              }, Longitude: ${Math.floor(location.longitude * 100) / 100}`}
            </Text>
            <Image
              source={require("../../../assets/Icons/location.png")}
              resizeMode="contain"
              style={{
                width: horizontalScale(18),
                height: horizontalScale(18),
                tintColor: "#767676",
              }}
            />
          </View>
        )}
      </TouchableOpacity>

      <View
        style={{
          marginLeft: horizontalScale(20),
          marginTop: verticalScale(15),
        }}
      >
        <Text>{date.toDateString()}</Text>
      </View>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <Text
          style={{
            marginLeft: horizontalScale(20),
            fontSize: moderateScale(15),
            fontFamily: "Inter-Bold",
            paddingVertical: 20,
            paddingHorizontal: 8,
            backgroundColor: "#d9d9d9",
            borderRadius: 8,
            width: 200,
          }}
        >
          Preferred Date and Time
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={(e, date) => {
            setShowPicker(Platform.OS === "ios");
            setDate(date);
          }}
          display="spinner"
        />
      )}

      {/* <TextInput
        style={{
          backgroundColor: "#EbEbEb",
          width: horizontalScale(180),
          height: verticalScale(55),
          marginLeft: horizontalScale(18),
          borderRadius: moderateScale(8),
          alignSelf: "flex-start",
          padding: moderateScale(20),
          marginTop: verticalScale(15),
          fontSize: moderateScale(13),
        }}
        placeholder="12/26/2023"
        value={{}}
        // onChangeText={{}}
        placeholderTextColor="#000000"
        keyboardType="default"
      /> */}

      <Text
        style={{
          marginLeft: horizontalScale(20),
          marginTop: verticalScale(15),
          fontSize: moderateScale(15),
          fontFamily: "Inter-Bold",
        }}
      >
        Services
      </Text>

      <Pressable onPress={deSelectItems} style={{ flex: 1, padding: 15 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => handleOnPress(item)}
              onLongPress={() => {
                selectItems(item);
                services.push(item.id);
              }}
              selected={getSelected(item)}
              item={item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Pressable>

      <TouchableOpacity
        onPress={async () => {
          console.log("Pressed.");
          const res = await createRequest({
            desc: description,
            location,
            date,
            selectedServices: services,
            category
          });
          console.log(res);
          if (res) navigation.navigate("Cart");
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
            Add to Cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  container: {},
  listItem: {
    backgroundColor: "#252628",
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,0,0,0.5)",
  },
});
