import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDeck } from "../../context/DeckContext";
import { useFlashcards } from "../../context/FlashcardContext";

const DeckList = ({ setModalVisible, setIsCreateChild }) => {
  const { decks, getDecks } = useDeck();

  useEffect(() => {
    getDecks();
  }, []);

  return (
    <ScrollView className="flex px-2">
      {decks.map((deckMap) => {
        return (
          <DeckListItem
            key={deckMap.id}
            deck={deckMap}
            setModalVisible={setModalVisible}
            setIsCreateChild={setIsCreateChild}
          />
        );
      })}
    </ScrollView>
  );
};

const DeckListItem = ({ deck, setModalVisible, setIsCreateChild }) => {
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
        <View className="flex flex-row justify-center items-center gap-x-4">
          <Text className="text-lg font-bold text-tertiary opacity-40">
            {deckFlashcards.length}
          </Text>
          <Icon
            name="plus"
            size={30}
            color="#bbb"
            onPress={() => {
              setModalVisible(true)
              setIsCreateChild(deck)
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default DeckList;
