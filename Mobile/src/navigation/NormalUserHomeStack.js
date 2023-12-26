import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ServiceDetail from '../screens/NormalUser/ServiceDetail';
import HomeScreen from '../screens/NormalUser/HomeScreen';
import Styles from '../StyleHolder';
import ServicesCheckout from '../screens/NormalUser/ServicesCheckout';

const NormalUserHomeStackBar = createStackNavigator()

const NormalUserHomeStack = ({navigation, route}) => {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "ServiceDetail" ||
      routeName === "ServicesCheckout" 
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: Styles.BottomTabBar });
    }
  }, [navigation, route]);

  return (
    <NormalUserHomeStackBar.Navigator>
           
  <NormalUserHomeStackBar.Screen name="HomePage" component={HomeScreen} options={{headerShown:  false}} />             
  <NormalUserHomeStackBar.Screen name="ServiceDetail" component={ServiceDetail} options={{headerShown:  false}} />             
  <NormalUserHomeStackBar.Screen name="ServicesCheckout" component={ServicesCheckout} options={{headerShown:  false}} />             
    
   </NormalUserHomeStackBar.Navigator>
  )
}

export default NormalUserHomeStack