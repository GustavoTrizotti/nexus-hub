import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

const FlashcardBody = ({ selectCard }) => {
  const [card, setCard] = useState(selectCard);
  const flashcardOptions = [
    { name: "Again", color: "#FFA0A0" },
    { name: "Hard", color: "#FFEAA0" },
    { name: "Good", color: "#A0FFB0" },
    { name: "Easy", color: "#A0FFF9" },
  ];

  return (
    <View className="flex bg-gray-50 w-full rounded-xl justify-center p-4">
      <View className="flex flex-2 p-2 border-b-2 border-gray-300">
        <Text className="text-lg text-center text-secondary">
          {card.question}
        </Text>
      </View>
      <View className="flex">
        <Text>Reveal Answer</Text>
      </View>
      <View className="flex flex-2 flex-row border-t-2 border-gray-300 py-2">
        {flashcardOptions.map((option) => {
          const buttonStyle = `flex flex-1 mx-1 rounded-md justify-center items-center p-3 ${option.color}`;
          return (
            <Pressable className={buttonStyle}>
              <Text className="">{option.name}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default FlashcardBody;
