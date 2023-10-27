import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { useDeck } from "../../context/DeckContext";
import { useFlashcards } from "../../context/FlashcardContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const DeckList = () => {
  const { decks, getDecks } = useDeck();

  useEffect(() => {
    getDecks();
  }, []);

  return (
    <View className="flex px-2">
      {decks.map((deckMap) => {
        return <DeckListItem key={deckMap.id} deck={deckMap} />;
      })}
    </View>
  );
};

const DeckListItem = ({ deck }) => {
  const navigation = useNavigation();
  const { getFlashcardsByDeckId } = useFlashcards();
  const [deckFlashcards, setDeckFlashcards] = useState([]);

  const getFlashcards = async () => {
    const flashcardsData = await getFlashcardsByDeckId(deck.id);
    setDeckFlashcards(flashcardsData);
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Deck", {
          deck: deck,
          flashcards: deckFlashcards,
        })
      }
    >
      <View className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100">
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name="cards-variant" size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary">{deck.name}</Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          {deckFlashcards.length}
        </Text>
      </View>
    </Pressable>
  );
};

export default DeckList;
