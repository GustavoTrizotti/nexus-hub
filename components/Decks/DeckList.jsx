import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFlashcards } from "../../context/FlashcardContext";

const DeckList = ({ decks }) => {
  return (
    <View className="flex px-2">
      {decks.map((deckMap) => {
        return <DeckListItem key={deckMap.id} deck={deckMap} />;
      })}
    </View>
  );
};

const DeckListItem = ({ deck, parent }) => {
  const iconName = parent ? "chevron-right" : "cards-variant";
  const navigation = useNavigation();

  const { flashcards, getFlashcardsByDeckId } = useFlashcards();
  const deckFlashcards = flashcards.filter((card) => card.deckId === deck.id);

  useEffect(() => {
    getFlashcardsByDeckId(deck.id);
  }, []);

  // TODO
  // Verificar se Deck possui atributo parentDeckId
  // Se possui, verificar a posição do parentDeckId na lista de decks e colocar o Deck +1 posição no array
  // Deck -> Tipo diferente de item da lista (barra lateral e collapsable)

  // TODO
  // Verificar se Deck possui atributo subjectId
  // Se possui criar lista diferente (collapsable) para armazenar os decks que tem relação com as subjects

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Deck", {
            deck: deck,
            flashcards: deckFlashcards,
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
