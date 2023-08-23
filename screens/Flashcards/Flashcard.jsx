import { View, Text } from "react-native";
import React from "react";
import FlashcardHeader from "../../components/Flashcards/FlashcardHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const Flashcard = ( { route } ) => {
  const card = route.params.card;
  const deck = route.params.deck

  return (
    <SafeAreaView>
      <View className="flex bg-white w-full h-full">
        <FlashcardHeader deck={deck}/>
        <Text>{card.question}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Flashcard;
