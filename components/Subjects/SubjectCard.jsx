import { View, Text } from "react-native";
import React from "react";
import scheme from "../../utils/subjectColorScheme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubjectCardDifficulty from "./SubjectCardDifficulty";

const SubjectCard = ({ subject }) => {
  const schemeColors = Object.keys(scheme);
  const filteredColors = schemeColors.filter(
    (color) => color == subject.subjectColor
  );
  const color = scheme[filteredColors[0]];

  return (
    <View
      className="flex p-4 h-44 w-1/2 justify-center items-center my-4 rounded-lg shadow-md"
      style={{ backgroundColor: `${color}` }}
    >
      <Text className="text-2xl text-tertiary font-bold mb-8">
        {subject.name}
      </Text>
      <View className="flex flex-row items-center justify-center">
        <Icon name="fire" size={30} color={"#4f4e4e"}/>
        <SubjectCardDifficulty diff={subject.difficulty} />
      </View>
    </View>
  );
};

export default SubjectCard;
