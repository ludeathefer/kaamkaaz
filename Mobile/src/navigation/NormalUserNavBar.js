import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, Image } from 'react-native';
import HomeScreen from '../screens/NormalUser/HomeScreen';
import NormalBooking from '../screens/NormalUser/NormalBooking';
import CartScreen from '../screens/NormalUser/CartScreen';
import { verticalScale, horizontalScale, moderateScale } from '../constants/measurements';
import NormalUserHomeStack from './NormalUserHomeStack';


const Tab = createBottomTabNavigator();

const Bottomtabnagivator =  () => {
  return (
    <Tab.Navigator 
      screenOptions={{

      shifting : 'true',
      tabBarStyle : styles.BottomTabBar,
     }} >
        <Tab.Screen name='Home' component={NormalUserHomeStack} options={{
                headerShown:  false, 
                tabBarShowLabel: false,
               tabBarLabel: ({ focused }) => {
                  return <Text style={{fontSize: 15, fontWeight: '600', color: "#fff", paddingLeft: 28}}>{focused ? 'Map' : ""}</Text>
                 },
                tabBarActiveBackgroundColor: '#153963',
                tabBarItemStyle: {  
                    borderRadius: 32,
                    borderWidth: 6  ,
                    borderColor: '#FFFFFF'
                  },
                //tabBarLabelPosition: 'beside-icon',
                tabBarIcon: ({focused}) => (
                <View>
                     <Image 
                      source ={require('../../assets/Icons/home.png')}
                      resizeMode = 'contain'
                    style = {{
                     
                      tintColor : focused ? '#ffffff' :  '#153963'
            }}/>
          </View >

        )
         }}/>
      <Tab.Screen name="Booking" component={NormalBooking} options={{
        headerShown:  false,
        tabBarShowLabel: false,
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 25}}>{focused ? 'Paid' : ""}</Text>
        },
        tabBarActiveBackgroundColor: '#153963',
        tabBarItemStyle: {  
          align:'center',
          borderRadius: 32,
          borderWidth: 5,
          borderColor: '#ffffff'
         },
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../../assets/Icons/booking.png')}
            resizeMode = 'contain'
            style = {{
              
              tintColor : focused ? '#ffffff' :  '#153963'
            }}/>
          </View >

        )
         }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
        headerShown:  false,
        tabBarShowLabel: false,
        tabBarLabel: ({ focused }) => {
          return <Text style={{fontSize: 16, fontWeight: '600', color: "#fff", marginLeft: 15, textAlign: 'center'}}>{focused ? 'Volunteers' : ""}</Text>
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: '#2FAD97',
        tabBarItemStyle: {  
          borderRadius: 32,
          borderWidth: 5,
          borderColor: '#ffffff'
         },
        tabBarIcon: ({focused}) => (
          <View>
            <Image 
            source ={require('../../assets/Icons/cart.png')}
            resizeMode = 'contain'
            style = {{
              width: 32,
              height: 32,
              tintColor : focused ? '#ffffff' :  '#153963'
            }}/>
          </View >

        )
         }}/>
              
    </Tab.Navigator>
  );
}

export default Bottomtabnagivator;

const styles = StyleSheet.create({
  BottomTabBar:{
    position: 'absolute',
    bottom: verticalScale(0),
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#ffffff',
    borderBottomEndRadius: 0,
    borderTopEndRadius: moderateScale(22),
    borderTopWidth: 0,
    height: verticalScale(65),
},
});