import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import {useFlashcards} from "../../context/FlashcardContext"
import { useEffect } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";
import { useState } from "react";

const DeckList = ({ decks }) => {
  return (
    <View className="flex px-2">
      {decks.map((deckMap) => {
        return (
          <DeckListItem
            key={deckMap.id}
            deck={deckMap}
          />
        );
      })}
    </View>
  );
};

const DeckListItem = ({ deck, parent }) => {

  const iconName = parent ? "chevron-right" : "cards-variant";
  const navigation = useNavigation();

  const { flashcards, getFlashcardsByDeckId } = useFlashcards()
  const deckFlashcards = flashcards.filter(card => card.deckId === deck.id)

  useEffect(() => {
    getFlashcardsByDeckId(deck.id)
  }, []);

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Deck", {
            deck: deck,
            flashcards: deckFlashcards
          })
        }
        className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100"
      >
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name={iconName} size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          {deckFlashcards.length}
        </Text>
      </Pressable>
    </View>
  );
};


export default DeckList;
