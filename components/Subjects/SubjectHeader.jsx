import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SubjectHeader = () => {
  return (
    <View className="flex p-4 mx-2">
      <View className="flex flex-row bg-gray-100 items-center p-2 m-2 mb-6 rounded-lg">
        <Icon name="magnify" size={24} color={"#AD6FEB"}/>
        <TextInput
          placeholder="Subject..."
          className="flex-1 p-3 text-lg rounded-md"
        />
      </View>
      <View className="flex p-4 mx-2">
        <Pressable className="bg-primary flex items-center justify-center p-2 flex-row rounded-lg">
          <Icon name="book" size={24} color={"#FFF"}/>
          <Text className="text-white font-bold text-lg text-center p-2 px-4">New Subject</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubjectHeader;
