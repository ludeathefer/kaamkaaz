import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ServiceDetail from "../screens/NormalUser/ServiceDetail";
import HomeScreen from "../screens/NormalUser/HomeScreen";
import Styles from "../StyleHolder";
import ProfileScreen from "../screens/NormalUser/ProfileScreen";
import LocationPicker from "../screens/NormalUser/LocationPicker";

const NormalUserHomeStackBar = createStackNavigator();

const NormalUserHomeStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "ServiceDetail" || routeName === "ServicesCheckout") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: Styles.BottomTabBar });
    }
  }, [navigation, route]);

  return (
    <NormalUserHomeStackBar.Navigator>
      <NormalUserHomeStackBar.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <NormalUserHomeStackBar.Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{ headerShown: false }}
      />

      <NormalUserHomeStackBar.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <NormalUserHomeStackBar.Screen
        name="LocationPicker"
        component={LocationPicker}
        options={{ headerShown: false }}
      />
    </NormalUserHomeStackBar.Navigator>
  );
};

export default NormalUserHomeStack;
