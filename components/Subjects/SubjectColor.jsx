import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import ColorPicker from "react-native-wheel-color-picker";

const SubjectColor = ({color, setColor}) => {

  return (
    <View className="flex justify-center items-center">
      <ColorPicker swatches={false} onColorChangeComplete={color => setColor(color)} thumbSize={30} row/>
      <Text className="p-4 text-lg px-6 mt-4 rounded-lg" style={{backgroundColor: color}}>
        {color}
      </Text>
    </View>
  );
};

export default SubjectColor;
