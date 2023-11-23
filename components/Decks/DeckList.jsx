import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDeck } from "../../context/DeckContext";
import { useFlashcards } from "../../context/FlashcardContext";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import { useAuth } from "../../context/AuthContext";

const DeckList = ({ setModalVisible, setIsCreateChild }) => {
  const { decks, getDecks, isLoading } = useDeck();
  const { flashcards } = useFlashcards(); 

  useEffect(() => {
    getDecks();
  }, [])

  useEffect(() => {
    console.log("Teste");
  }, [decks, flashcards])

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
  const { token } = useAuth();
  const navigation = useNavigation();
  const [deckFlashcards, setDeckFlashcards] = useState([])
  
  const getFlashcards = async () => {
    await axios.get(baseURL.flashcards.baseFlashcards + `/${deck.id}/all`, {
      headers: {
        Authorization: token.auth,
      },
    })
    .then((res) => {
      if (res.data.length > 0) {
        setDeckFlashcards(res.data)
      }
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getFlashcards();
  }, [])

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Deck", {
          deck: deck,
          deckFlashcards: deckFlashcards
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
            {deckFlashcards.length || 0}
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
