import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FlashCardOptions = ({ isAnswer, handleRevealAnswer }) => {
  const flashcardOptions = [
    { name: "Again", color: "bg-subjectRed" },
    { name: "Hard", color: "bg-subjectYellow" },
    { name: "Good", color: "bg-subjectGreen" },
    { name: "Easy", color: "bg-subjectBlue" },
  ];

  return (
    <View>
      {isAnswer ? (
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
      ) : (
        <View className="flex flex-row border-t-2 border-gray-300 py-4 justify-center items-center">
          <Pressable
            className="flex flex-row"
            onPress={() => {
              handleRevealAnswer();
            }}
          >
            <Text className="text-center text-xl">Reveal Answer</Text>
            <Icon name="chevron-right" size={30} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FlashCardOptions;
