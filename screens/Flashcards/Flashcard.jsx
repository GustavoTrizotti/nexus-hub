import { View } from "react-native";
import React from "react";
import FlashcardHeader from "../../components/Flashcards/FlashcardHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import FlashcardBody from "../../components/Flashcards/FlashcardBody";
import { useFlashcards } from "../../context/FlashcardContext";
import { useEffect } from "react";

const Flashcard = ({ route }) => {
  const card = route.params.card;
  const deck = route.params.deck;

  const { getFlashcardsByDeckId, flashcards } = useFlashcards();

  useEffect(() => {
    getFlashcardsByDeckId(deck.id);
  }, [])

  console.log(flashcards.filter(card => card.deckId === deck.id));

  return (
    <SafeAreaView className="bg-white h-full">
      <FlashcardHeader length={flashcards.length} deckName={deck.name}/>
      <View className="flex-1 m-2 mb-8">
        <FlashcardBody selectCard={card}/>
      </View>
    </SafeAreaView>
  );
};

export default Flashcard;
