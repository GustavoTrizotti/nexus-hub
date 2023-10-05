import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchInput = ({ color, placeholderInput }) => {
  return (
    <View className="flex flex-1 w-full flex-row bg-gray-100 rounded-lg p-6 py-3 justify-center items-center">
      <Icon name="magnify" size={30} color={color} />
      <TextInput
        placeholder={placeholderInput}
        className="text-lg w-full p-2"
      />
    </View>
  );
};

export default SearchInput;
