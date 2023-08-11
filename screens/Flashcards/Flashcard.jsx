import { View, Text } from "react-native";
import React from "react";
import FlashcardHeader from "../../components/Flashcards/FlashcardHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const Flashcard = ( { route } ) => {
  const { deck } = route.params;

  return (
    <SafeAreaView>
      <View className="flex bg-white w-full h-full">
        <FlashcardHeader />
      </View>
    </SafeAreaView>
  );
};

export default Flashcard;
