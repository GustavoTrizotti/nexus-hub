import React from "react";
import { View } from "react-native";

import DeckListItem from "./DeckListItem";

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

export default DeckList;
