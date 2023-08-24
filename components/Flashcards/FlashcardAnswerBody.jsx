import { View, Text } from "react-native";
import React, { useState } from "react";

const FlashcardAnswerBody = ({ sCard }) => {
  const [card, setCard] = useState(sCard);
  
  return (
    <View>
      <View className="flex p-2">
        <Text className="text-center text-lg opacity-30 text-secondary pb-4 font-bold">Answer</Text>
        <Text className="text-center text-xl">{card.answer}</Text>
      </View>
    </View>
  );
};

export default FlashcardAnswerBody;
