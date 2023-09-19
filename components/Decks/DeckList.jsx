import { View } from "react-native";
import React, { useState } from "react";

import DeckListItem from "./DeckListItem";
import DeckListChildItem from "./DeckListChildItem";

const DeckList = ({ deckList }) => {

  return (
    <View className="flex px-2">
      {deckList.map((deck) => {
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
          return <DeckListItem key={deck.id} deck={deck} />;
        }
      })}
    </View>
  );
};

export default DeckList;
