import { View, Text } from "react-native";
import React from "react";
import scheme from "../../utils/subjectColorScheme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubjectCardDifficulty from "./SubjectCardDifficulty";
import { changeTextColor } from "../../utils/textColorHex";

const SubjectCard = ({ subject }) => {
  const bgColor = subject.color
  const colors = {
    color: subject.color,
    dark: "#FFF",
    light: "#2E2E2E"
  }

  const color = changeTextColor(colors.color, colors.dark, colors.light)

  return (
    <View
      className="flex px-4 py-12 w-full justify-center items-center my-4 rounded-lg"
      style={{backgroundColor: bgColor}}
    >
      <Text className="text-2xl text-tertiary font-bold mb-8 text-center" style={{color: color}}>
        {subject.name}
      </Text>
      <View className="flex flex-row items-center justify-center">
        <Icon name="fire" size={30} color={color}/>
        <SubjectCardDifficulty diff={subject.difficulty} color={color}/>
      </View>
    </View>
  );
};

export default SubjectCard;
