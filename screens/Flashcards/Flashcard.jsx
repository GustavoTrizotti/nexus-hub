import { View, Text } from "react-native";
import React from "react";
import FlashcardHeader from "../../components/Flashcards/FlashcardHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashcardBody from "../../components/Flashcards/FlashcardBody";

const Flashcard = ( { route } ) => {
  const card = route.params.card;
  const deck = route.params.deck

  return (
    <SafeAreaView className="flex bg-white w-full h-full">
      <FlashcardHeader deck={deck}/>
      <View className="flex w-full h-fit p-3">
        <FlashcardBody selectCard={card}/>
      </View>
    </SafeAreaView>
  );
};

export default Flashcard;
