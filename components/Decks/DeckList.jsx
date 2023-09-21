import { View } from "react-native";
import React from "react";

import DeckListItem from "./DeckListItem";
import { useState } from "react";

const DeckList = ({ decks, setDecks }) => {
  const [deck, setDeck] = useState({});

  return (
    <View className="flex px-2">
      {decks.map((deckMap) => {
        return (
          <DeckListItem
            key={deckMap.id}
            deck={deckMap}
            setDeck={setDeck}
            decks={decks}
            setDecks={setDecks}
          />
        );
      })}
    </View>
  );
};

export default DeckList;
