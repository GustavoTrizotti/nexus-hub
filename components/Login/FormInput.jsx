import { View, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FormInput = ({ name, placeholder, color = "#2E2E2E" }) => {
  return (
    <View className="flex flex-row border-2 border-secondary">
      <View className="bg-secondary flex justify-center items-center px-2.5 py-2 mr-4">
        <Icon name={name} color={color} size={32} />
      </View>
      <TextInput placeholder={placeholder} className="flex-1 text-secondary" placeholderTextColor="#2E2E2E"/>
    </View>
  );
};

export default FormInput;
