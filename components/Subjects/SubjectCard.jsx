import { View, Text } from "react-native";
import React from "react";
import scheme from "../../utils/subjectColorScheme";

const SubjectCard = ({ subject }) => {
  const color = subject.subjectColor;
  const textStyle = `text-lg font-bold text-${color}`;
  console.log(textStyle);

  return (
    <View className="flex bg-gray-100 p-2 w-1/2 justify-center items-center my-4">
      <Text className={textStyle}>{subject.name}</Text>
      <Text>{subject.difficulty}</Text>
    </View>
  );
};

export default SubjectCard;
