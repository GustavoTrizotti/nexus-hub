import { View, Text } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";

const FlashcardAnswerBody = ({ sCard }) => {
  const [card, setCard] = useState(sCard);
  const flashcardOptions = [
    { name: "Again", color: "bg-subjectRed" },
    { name: "Hard", color: "bg-subjectYellow" },
    { name: "Good", color: "bg-subjectGreen" },
    { name: "Easy", color: "bg-subjectBlue" },
  ];

  return (
    <View>
      <View className="flex p-2 h-fit justify-center items-center">
        <Text className="text-center text-xl">{card.answer}</Text>
      </View>
      <View className="flex flex-row border-t-2 border-gray-300 py-4 justify-center items-center">
        {flashcardOptions.map((option, idx) => {
          const buttonStyle = `flex flex-1 mx-1 rounded-md justify-center items-center p-2 ${option.color}`;
          return (
            <Pressable className={buttonStyle} key={idx}>
              <Text className="text-center text-secondary font-bold text-lg">
                {option.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default FlashcardAnswerBody;