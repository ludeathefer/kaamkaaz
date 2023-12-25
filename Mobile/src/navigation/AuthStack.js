import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import login_selection from '../authScreen/login_selection.js';
import LoginScreen from '../authScreen/login';
import RegisterScreen from '../authScreen/register';
import HomeScreen from '../screens/NormalUser/HomeScreen.js';
import Bottomtabnagivator from './NormalUserNavBar.js';

const AuthStackBar = createStackNavigator()

const AuthStack = ({ navigation, route }) => {
  return (
    <AuthStackBar.Navigator>
           
    <AuthStackBar.Screen name="loginSelection" component={login_selection} options={{headerShown:  false}} />             
    <AuthStackBar.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:  false}} />             
    <AuthStackBar.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:  false}} />             
    <AuthStackBar.Screen name="Home" component={Bottomtabnagivator} options={{headerShown:  false}} />             
    
   </AuthStackBar.Navigator>
  )
}

export default AuthStack