import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const NormalUserStackBar = createStackNavigator()

const NormalUserStack = ({ navigation, route }) => {
  return (
    <NormalUserStackBar.Navigator>
           
{    //<NormalUserStackBar.Screen name="HomePage" component={ProductDetailBar} options={{headerShown:  false}} />             
}    
   </NormalUserStackBar.Navigator>
  )
}

export default NormalUserStack