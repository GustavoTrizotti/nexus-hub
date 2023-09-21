import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <SafeAreaView>
      <MainHeader/>
      <View className="flex h-full justify-center items-center bg-white">
        <Pressable className="p-4 px-6 bg-primary" onPress={() => handleLogout()}>
          <Text className="text-white font-lg font-bold uppercase">Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Home;
