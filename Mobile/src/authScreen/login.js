import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale, moderateScale } from '../constants/measurements'


const LoginScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff', justifyContent: 'flex-start', }}>
      <Image source={require('../../assets/logo.png')} style={{ height: verticalScale(60), resizeMode: 'contain', alignSelf: 'center', marginTop: verticalScale(60), }} />
      <Image source={require('../../assets/illustration.png')} style={{ height: verticalScale(200), resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{
        fontFamily: 'Inter-Bold',
        fontSize: moderateScale(26),
        alignSelf: 'flex-start',
        marginLeft: horizontalScale(30),
        marginVertical: verticalScale(10),
      }}>Hello Again</Text>

      <Text style={{
        fontFamily: 'Inter-Light',
        fontSize: moderateScale(17),
        alignSelf: 'flex-start',
        marginLeft: horizontalScale(30),
      }}>Welcome Back {'\n'}You have been missed.</Text>
      
      <TouchableOpacity style={{position: 'absolute', marginTop: verticalScale(70), marginLeft: horizontalScale(20),}}onPress={() => {
        navigation.goBack()
      }}>
        <Image source={require('../../assets/backButton.png')} style={{ height: verticalScale(42), width: horizontalScale(40),  }} />
      </TouchableOpacity>
      <TextInput
        style={{
          backgroundColor: '#EAEAEA',
          width: horizontalScale(300),
          height: verticalScale(55),
          borderRadius: moderateScale(18),
          alignSelf: 'center',
          padding: moderateScale(20),
          marginTop: verticalScale(15),
          fontSize: moderateScale(15),

        }}
        placeholder="Enter Email"
        value={{}}
        onChangeText={{}}
        placeholderTextColor="#767676"
        keyboardType="default"
      ></TextInput>


      <TextInput
        style={{
          backgroundColor: '#EAEAEA',
          width: horizontalScale(300),
          height: verticalScale(55),
          borderRadius: moderateScale(18),
          alignSelf: 'center',
          padding: moderateScale(20),
          marginTop: verticalScale(15),
          fontSize: moderateScale(15),
        }}
        placeholder="Enter Password"
        value={{}}
        onChangeText={{}}
        placeholderTextColor="#767676"
        keyboardType="default"
      ></TextInput>

      <TouchableOpacity onPress={() => {
        navigation.navigate("Home")
      }}>
        <View style={{ width: horizontalScale(300), height: verticalScale(55), backgroundColor: '#153963', justifyContent: 'center', borderRadius: moderateScale(15), marginVertical: 15, alignSelf: 'center' }}>
          <Text style={{ alignSelf: 'center', fontSize: moderateScale(14), fontFamily: 'Inter-Bold', color: '#fff' }}>Login</Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({

});