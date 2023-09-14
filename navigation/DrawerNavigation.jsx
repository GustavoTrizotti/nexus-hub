import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} navigation={navigation}/>} screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={TabNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
