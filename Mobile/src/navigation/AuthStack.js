import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import login_selection from '../authScreens/login_selection';
import LoginScreen from '../authScreens/login';
import RegisterScreen from '../authScreens/register';

const AuthStackBar = createStackNavigator()

const AuthStack = ({ navigation, route }) => {
  return (
    <AuthStackBar.Navigator>
           
    <AuthStackBar.Screen name="loginSelection" component={login_selection} options={{headerShown:  false}} />             
    <AuthStackBar.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:  false}} />             
    <AuthStackBar.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown:  false}} />             
    
   </AuthStackBar.Navigator>
  )
}

export default AuthStack