import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FlashcardBody = ({ selectCard }) => {
  const [card, setCard] = useState(selectCard);
  const flashcardOptions = [
    { name: "Again", color: "bg-subjectRed" },
    { name: "Hard", color: "bg-subjectYellow" },
    { name: "Good", color: "bg-subjectGreen" },
    { name: "Easy", color: "bg-subjectBlue" },
  ];

  return (
    <View className="flex bg-gray-100 rounded-xl justify-between h-full m-2 p-4 px-6">
      <View className="flex p-4 border-b-2 border-gray-300">
        <Text className="text-lg font-bold text-center text-secondary">
          {card.question}
        </Text>
      </View>
      <View className="flex p-2 h-fit justify-center items-center">
        <Pressable className="flex flex-row" onPress={() => {console.log("Teste")}}>
          <Text className="text-center text-xl">Reveal Answer</Text>
          <Icon name="chevron-right" size={30}/>
        </Pressable>
      </View>
      <View className="flex flex-row border-t-2 border-gray-300 py-4">
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

export default FlashcardBody;
