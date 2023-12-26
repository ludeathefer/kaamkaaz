import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceDetail from '../screens/NormalUser/ServiceDetail';

const NormalUserHomeStackBar = createStackNavigator()

const NormalUserHomeStack = ({ navigation, route }) => {
  return (
    <NormalUserHomeStackBar.Navigator>
           
  <NormalUserHomeStackBar.Screen name="HomePage" component={HomeScreen} options={{headerShown:  false}} />             
  <NormalUserHomeStackBar.Screen name="ServiceDetail" component={ServiceDetail} options={{headerShown:  false}} />             
    
   </NormalUserHomeStackBar.Navigator>
  )
}

export default NormalUserHomeStack