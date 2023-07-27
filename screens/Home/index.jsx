import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View className="flex justify-center items-center h-full bg-white">
      <Text>Home</Text>
      <StatusBar translucent style="dark" />
    </View>
  );
};
export default Home;
