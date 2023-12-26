import { View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { verticalScale, moderateScale, horizontalScale } from '../../constants/measurements'


const ServicesCheckout = ({navigation}) => {

    const windowHeight = Dimensions.get('window').height;

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
        marginTop: verticalScale(15),
        fontSize: moderateScale(16),
        fontFamily: 'Inter-SemiBold',
      }}>Services</Text>

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
  
    <Text style={{
        position: 'absolute',
        marginLeft: horizontalScale(30),
        marginTop: windowHeight/2,
        fontSize: moderateScale(16),
        fontFamily: 'Inter-SemiBold',
      }}>Images</Text>
    <TouchableOpacity onPress={{}}>
    <Text style={{
        fontSize:moderateScale(40),
        color: '#153693',
        marginLeft: horizontalScale(70),
        marginTop: windowHeight/2,
    }}>+</Text>
    </TouchableOpacity>
  

    </View>
  )
}

export default ServicesCheckout