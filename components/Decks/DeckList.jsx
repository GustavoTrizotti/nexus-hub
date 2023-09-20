import { View } from "react-native";
import React from "react";

import DeckListItem from "./DeckListItem";
import DeckListChildItem from "./DeckListChildItem";

const DeckList = ({ decks, setDecks }) => {
  return (
    <View className="flex px-2">
      {decks.map((deck) => {
        if (deck.childDeck) {
          return (
            <DeckListChildItem
              key={deck.id}
              deck={deck.childDeck}
              parentDeck={deck}
              parent={true}
            />
          );
        } else {
          return <DeckListItem key={deck.id} deck={deck} decks={decks} setDecks={setDecks}/>;
        }
      })}
    </View>
  );
};

export default DeckList;
