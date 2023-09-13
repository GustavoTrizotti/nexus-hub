import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Tab" component={TabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
