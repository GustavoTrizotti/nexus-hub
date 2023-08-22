import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";

const Home = () => {
  return (
    <SafeAreaView>
      <MainHeader/>
      <View className="flex h-full justify-center items-center bg-white">
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;
