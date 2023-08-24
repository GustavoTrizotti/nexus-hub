import { View, Text } from "react-native";
import React, { useState } from "react";

import FlashcardAnswerBody from "./FlashcardAnswerBody";
import FlashCardOptions from "./FlashCardOptions";

const FlashcardBody = ({ selectCard }) => {
  const [card, setCard] = useState(selectCard);
  const [isAnswer, setIsAnswer] = useState(false);
  /* TODO - GET NEXT CARD AFTER RESPONSE */

  const handleRevealAnswer = () => {
    setIsAnswer(true);
  }

  return (
    <View className="flex bg-gray-100 rounded-xl justify-between h-full m-2 p-4 px-6">
      <View className="flex p-4 border-b-2 border-gray-300">
        <Text className="text-lg font-bold text-center text-secondary">
          {card.question}
        </Text>
      </View>
      <View>
        {isAnswer ? (<FlashcardAnswerBody sCard={card} />) : null}
      </View>
      <FlashCardOptions handleRevealAnswer={handleRevealAnswer} isAnswer={isAnswer}/>
    </View>
  );
};

export default FlashcardBody;
