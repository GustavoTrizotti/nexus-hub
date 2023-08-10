import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const FlashcardHeader = () => {
  const route = useRoute();

  return (
    <View className="bg-white p-6 flex flex-col items-center justify-center">
      <StatusBar style="dark" backgroundColor="#fff" />
      <Text className="text-primary text-center uppercase text-2xl font-bold">
        {route.name}
      </Text>
      <Text className="text-tertiary text-center uppercase text-lg font-bold opacity-40">
        {route.name}
      </Text>
    </View>
  );
};

export default FlashcardHeader;
