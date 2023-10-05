import { View } from "react-native";
import React from "react";

import DeckListItem from "./DeckListItem";

const DeckList = ({ decks, setDecks }) => {
  return (
    <View className="flex px-2">
      {decks.map((deckMap) => {
        return (
          <DeckListItem
            key={deckMap.id}
            deck={deckMap}
            decks={decks}
            setDecks={setDecks}
          />
        );
      })}
    </View>
  );
};

export default DeckList;
