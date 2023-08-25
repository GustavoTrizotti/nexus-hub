import { View, Text, Pressable } from "react-native";
import React from "react";

const FlashcardMenu = () => {
  return (
    <View className="flex relative bg-white mx-4 my-8 h-fit rounded-lg">
      <Pressable className="p-4 border-t-2 border-b-2 border-gray-100 rounded-t-lg">
        <Text className="text-lg text-center">Edit</Text>
      </Pressable>
      <Pressable className="p-4 border-t-2 border-b-2 border-gray-100">
        <Text className="text-lg text-center">Remove</Text>
      </Pressable>
      <Pressable onPress={() => {

      }} className="p-4 border-t-2 border-b-2 border-gray-100 rounded-b-lg">
        <Text className="text-lg text-center">Close</Text>
      </Pressable>
    </View>
  );
};

export default FlashcardMenu;
