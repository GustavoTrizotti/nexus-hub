import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SubjectCardDifficulty = ({ diff, color }) => {
  const diffArray = [];

  for (let i = 0; i < 5; i++) {
    if (i >= diff) {
      diffArray.push(1);
    } else {
      diffArray.push(0);
    }
  }

  return (
    <View className="flex flex-row gap-x-1">
      {diffArray.map((diff, idx) => {
        if (diff == 1) {
          return (
            <Icon key={idx} name="circle-outline" size={16} color={color} />
          );
        } else if (diff == 0) {
          return <Icon key={idx} name="circle" size={16} color={color} />;
        }
      })}
    </View>
  );
};

export default SubjectCardDifficulty;
