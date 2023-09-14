import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuth } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer = (props) => {
    const { setAuthToken } = useAuth();
    const navigation = props.navigation;

    const handleLogout = () => {
        console.log("logout")
        setAuthToken(null);
        AsyncStorage.removeItem("authToken");
        navigation.navigate("Login");
    }

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View className="w-full flex p-4 items-start justify-center">
        <Pressable className="bg-primary p-3 flex flex-row rounded-md" onPress={() => handleLogout()}>
            <Icon name='logout' size={20} color="#fff"/>
          <Text className="text-md text-white font-bold uppercase ml-2">Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomDrawer;
