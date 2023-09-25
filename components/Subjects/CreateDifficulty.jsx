import { Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import DifficultyCheck from "./DifficultyCheck";

const CreateDifficulty = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const diffs = {
    1: "Very Easy",
    2: "Easy",
    3: "Medium",
    4: "Hard",
    5: "Very Hard",
  };

  const difficulty = checkBoxes.filter((check) => check === true).length;

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkBoxes];
    if (newCheckboxes[index] !== false) {
      for (let i = index + 1; i < newCheckboxes.length; i++) {
        newCheckboxes[i] = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        newCheckboxes[i] = true;
      }
    }
    setCheckBoxes(newCheckboxes);
  };

  return (
    <View className="w-full mt-2">
      <View className="p-4 flex flex-row justify-center">
        {checkBoxes.map((checked, index) => (
          <DifficultyCheck
            checked={checked}
            handleCheck={() => handleCheckboxChange(index)}
            key={index}
          />
        ))}
      </View>

      <View className="flex justify-center items-center">
        <Text className="pt-2 text-lg text-primary uppercase font-bold">{diffs[difficulty]}</Text>
      </View>
    </View>
  );
};

export default CreateDifficulty;
