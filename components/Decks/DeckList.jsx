import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import {useFlashcards} from "../../context/FlashcardContext"
import { useEffect } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";

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

  useEffect(() => {
    getFlashcardsByDeckId(deck.id)
  }, []);

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Deck", {
            deck: deck,
            flashcards: flashcards
          })
        }
        className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100"
      >
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name={iconName} size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          {flashcards.length}
        </Text>
      </Pressable>
    </View>
  );
};


export default DeckList;
