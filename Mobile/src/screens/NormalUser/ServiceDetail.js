import { View, Text, Image, TouchableOpacity, FlatList, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../constants/measurements'
import DateTimePicker from '@react-native-community/datetimepicker';


const data = [
  {name: 'Rohan', contact: '1111111111', id: '1'},
  {name: 'Mohan', contact: '2222222222', id: '2'},
  {name: 'Sohan', contact: '3333333333', id: '3'},
  {name: 'Hohan', contact: '4444444444', id: '4'},
  {name: 'Dohan', contact: '5555555555', id: '5'},
  {name: 'Pohan', contact: '6666666666', id: '6'},
];

const ListItem = ({item, selected, onPress, onLongPress}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.listItem}>
      <View style={{padding: 8}}>
        <Text style={{fontSize: 22, color: '#fff'}}>{item.name}</Text>
        <Text style={{color: '#989BA1'}}>{item.contact}</Text>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  </>
);


const ServiceDetail = ({ navigation }) => {

  
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const handleOnPress = contact => {
    if (selectedItems.length) {
      return selectItems(contact);
    }

    // here you can add you code what do you want if user just do single tap
    console.log('pressed');
  };

  const getSelected = contact => selectedItems.includes(contact.id);

  const deSelectItems = () => setSelectedItems([]);

  const selectItems = item => {
    if (selectedItems.includes(item.id)) {
      const newListItems = selectedItems.filter(
        listItem => listItem !== item.id,
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
    else {
      toggleDatePicker();
    }
  };


  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
      <Text style={{ marginTop: verticalScale(50), marginLeft: horizontalScale(60), fontFamily: 'Inter-SemiBold', fontSize: moderateScale(32) }}>Electrician</Text>
      <TouchableOpacity style={{position: 'absolute', marginTop: verticalScale(50), marginLeft: horizontalScale(10),}}onPress={() => {
        navigation.goBack()
      }}>
        <Image source={require('../../../assets/backButton.png')} style={{ height: verticalScale(42), width: horizontalScale(40),  }} />
      </TouchableOpacity>
      
      
      <Text style={{
        marginLeft: horizontalScale(30),
        marginTop: verticalScale(50),
        fontSize: moderateScale(16),
        fontFamily: 'Inter-SemiBold',
      }}>Description</Text>

      <TextInput
            style={{
                width:'82%',
                borderBottomColor:'#153693',
                borderBottomWidth:1,
                alignSelf: 'center',
                marginTop: verticalScale(25),
                fontFamily: 'Inter-Regular',
                fontSize: moderateScale(16)
            }}
            value={{}}
            multiline={true}
            cursorColor={'#153693'}
            underlineColorAndroid='transparent'
    />

  
      <TouchableOpacity onPress={() => navigation.navigate('LocationPicker')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: verticalScale(20), marginLeft: horizontalScale(20) }}>
          <Text style={{
            color: '#767676',
            textAlign: 'left',
            fontSize: 15,
            fontWeight: '900',
          }}>Location: Sanepa</Text>
          <Image
            source={require('../../../assets/Icons/location.png')}
            resizeMode='contain'
            style={{
              width: horizontalScale(18),
              height: horizontalScale(18),
              tintColor: '#767676'
            }} />
        </View>
      </TouchableOpacity>

      <Text style={{
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(15),
        fontSize: moderateScale(15),
        fontFamily: 'Inter-Bold',
      }}>Preferred Date and Time</Text>

      {showPicker && (<DateTimePicker value={date} onValueChange={setDate} display="spinner" onChange={onChange} />)}

      <TextInput style={{
        backgroundColor: '#EbEbEb',
        width: horizontalScale(180),
        height: verticalScale(55),
        marginLeft: horizontalScale(18),
        borderRadius: moderateScale(8),
        alignSelf: 'flex-start',
        padding: moderateScale(20),
        marginTop: verticalScale(15),
        fontSize: moderateScale(13),
      }}
        placeholder="12/26/2023"
        value={{}}
        onChangeText={{}}
        placeholderTextColor="#000000"
        keyboardType="default" />

      <Text style={{
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(15),
        fontSize: moderateScale(15),
        fontFamily: 'Inter-Bold',
      }}>Services</Text>

<Pressable onPress={deSelectItems} style={{flex: 1, padding: 15}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem
            onPress={() => handleOnPress(item)}
            onLongPress={() => selectItems(item)}
            selected={getSelected(item)}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Pressable>

    <TouchableOpacity onPress={() => {
        navigation.navigate("ServicesCheckout")
      }}>
        <View style={{ width: horizontalScale(300), height: verticalScale(55), backgroundColor: '#153963', justifyContent: 'center', borderRadius: moderateScale(15), marginVertical: 15, alignSelf: 'center' }}>
          <Text style={{ alignSelf: 'center', fontSize: moderateScale(14), fontFamily: 'Inter-Bold', color: '#fff' }}>Proceed</Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}

export default ServiceDetail

const styles = StyleSheet.create({
  container: {},
  listItem: {
    backgroundColor: '#252628',
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,0,0,0.5)',
  }
});