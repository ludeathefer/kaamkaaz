import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../constants/measurements'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';


const ServiceDetail = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false);

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
      <Image source={require('../../../assets/categoryDetailPlaceholder/electrician-image.png')} style={{ height: verticalScale(250), resizeMode: 'contain', alignSelf: 'center', }} />
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
        backgroundColor: '#EAEAEA',
        width: horizontalScale(180),
        height: verticalScale(55),
        marginLeft: horizontalScale(18),
        borderRadius: moderateScale(50),
        alignSelf: 'flex-start',
        padding: moderateScale(20),
        marginTop: verticalScale(15),
        fontSize: moderateScale(15),
      }}
        placeholder="12/26/2023"
        value={{}}
        onChangeText={{}}
        placeholderTextColor="#767676"
        keyboardType="default" />

      <Text style={{
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(15),
        fontSize: moderateScale(15),
        fontFamily: 'Inter-Bold',
      }}>Services</Text>

    </View>

  )
}

export default ServiceDetail