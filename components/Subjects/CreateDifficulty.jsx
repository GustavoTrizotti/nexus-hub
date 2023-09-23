import { View } from "react-native";
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
    <View className="flex flex-row p-4 w-full mt-2 justify-center">
      {checkBoxes.map((checked, index) => (
        <DifficultyCheck
          checked={checked}
          handleCheck={() => handleCheckboxChange(index)}
          key={index}
        />
      ))}
    </View>
  );
};

export default CreateDifficulty;
