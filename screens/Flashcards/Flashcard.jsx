import { View, Text } from "react-native";
import React from "react";
import FlashcardHeader from "../../components/Flashcards/FlashcardHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashcardBody from "../../components/Flashcards/FlashcardBody";

const Flashcard = ({ route }) => {
  const card = route.params.card;
  const deck = route.params.deck;

  return (
    <SafeAreaView className="bg-white h-full">
      <FlashcardHeader deck={deck} />
      <View className="flex-1 m-2 mb-8">
        <FlashcardBody selectCard={card}/>
      </View>
    </SafeAreaView>
  );
};

export default Flashcard;
