import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DeckListItem from "./DeckListItem";

const DeckListChildItem = ({ parentDeck, deck, parent }) => {

  return (
    <View>
      <DeckListItem deck={parentDeck} parent={parent}/>
      <View className="flex flex-row p-4 mb-2 mr-3 ml-8 items-center justify-between border-b-2 border-gray-100">
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name='cards-variant' size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">{deck.cards.length}</Text>
      </View>
    </View>
  );
};

export default DeckListChildItem;
