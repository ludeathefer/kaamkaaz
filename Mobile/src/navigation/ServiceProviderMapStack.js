import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const ServiceProviderStackBar = createStackNavigator();

const ServiceProviderStack = ({ navigation, route }) => {
  return (
    <ServiceProviderStackBar.Navigator>
      <ServiceProviderStackBar.Screen
        name="Root"
        component={ProductDetailBar}
        options={{ headerShown: false }}
      />
    </ServiceProviderStackBar.Navigator>
  );
};

export default ServiceProviderStack;
