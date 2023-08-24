import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import FlashcardAnswerBody from "./FlashcardAnswerBody";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FlashcardBody = ({ selectCard }) => {
  const [card, setCard] = useState(selectCard);
  const [isAnswer, setIsAnswer] = useState(false);
  /* TODO - GET NEXT CARD AFTER RESPONSE */

  return (
    <View className="flex bg-gray-100 rounded-xl justify-between h-full m-2 p-4 px-6">
      <View className="flex p-4 border-b-2 border-gray-300">
        <Text className="text-lg font-bold text-center text-secondary">
          {card.question}
        </Text>
      </View>
      {isAnswer ? (
        <FlashcardAnswerBody sCard={card} />
      ) : (
        <View>
          <View className="flex p-2 h-fit justify-center items-center"></View>
          <View className="flex flex-row border-t-2 border-gray-300 py-4 justify-center items-center">
            <Pressable
              className="flex flex-row"
              onPress={() => {
                setIsAnswer(true);
              }}
            >
              <Text className="text-center text-xl">Reveal Answer</Text>
              <Icon name="chevron-right" size={30} />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default FlashcardBody;
