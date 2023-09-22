import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import DifficultyCheck from "./DifficultyCheck";

const CreateDifficulty = () => {
  const [diffs, setDiffs] = useState([false, false, false, false, false]);

  return (
    <View className="flex flex-row p-4 w-full mt-2 justify-center">
      {diffs.map((diff, i) => {
        const handleCheck = () => {
          setDiffs()
        }

        return (
          <DifficultyCheck
            key={i}
            checked={checked}
            handleCheck={handleCheck}
          />
        );
      })}
    </View>
  );
};

export default CreateDifficulty;
