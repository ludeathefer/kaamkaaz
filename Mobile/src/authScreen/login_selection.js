import { moderateScale, horizontalScale, verticalScale } from '../constants/measurements'
import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


const login_selection = ({ navigation }) => {

const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{flex:1, flexDirection: 'column', backgroundColor: '#fff', justifyContent:'flex-start',}}>
      <Image source={require('../../assets/logo.png')} style={{width: horizontalScale(200), resizeMode:'contain', alignSelf: 'center',}}/>
      <Image source={require('../../assets/illustration.png')} style={{ height:verticalScale(200), resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={{fontSize: moderateScale(14), fontFamily:'Inter-SemiBold', alignSelf:'center', marginVertical:verticalScale(20),}}>Plumber, Electrician, Painter,{'\n'} Sabai bhettinchha aba sajilai!</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate("LoginScreen")}}>
        <View style={{width: horizontalScale(200), height: verticalScale(50), backgroundColor:'#153963', justifyContent:'center', borderRadius: moderateScale(15), marginVertical: 10, alignSelf:'center'}}>
          <Text style={{alignSelf: 'center', fontSize:moderateScale(14), fontFamily:'Inter-Bold', color: '#fff'}}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("RegisterScreen")}}>
        <View style={{width: horizontalScale(200), height: verticalScale(50), backgroundColor:'#E85F5C', justifyContent:'center', borderRadius: moderateScale(15), alignSelf:'center'}}>
          <Text style={{alignSelf: 'center', fontSize:moderateScale(14), fontFamily:'Inter-Bold',  color: '#fff'}}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default login_selection