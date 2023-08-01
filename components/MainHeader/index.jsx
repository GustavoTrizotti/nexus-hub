import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const MainHeader = ( { title } ) => {

  const navigation = useNavigation();

  return (
    <View className="bg-white p-6 flex flex-row items-center justify-between">
      <StatusBar style="dark" backgroundColor="#fff" />
      {title === "Home" ? (
        <Icon name="bars" size={24} color="#AD6FEB" />
      ) : (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#AD6FEB" />
        </TouchableWithoutFeedback>
      )}
      <Text className="text-primary text-center uppercase text-2xl font-bold">
        {title}
      </Text>
      <Icon name="search" size={20} color="#AD6FEB" />
    </View>
  );
};

export default MainHeader;
