import { View } from "react-native";
import React, { useState } from "react";

import DeckListItem from "./DeckListItem";
import DeckListChildItem from "./DeckListChildItem";

const DeckList = ({ deckList }) => {

  return (
    <View className="flex px-2">
      {deckList.map((deck, index) => {
        if (deck.childDeck) {
          return (
            <DeckListChildItem
              key={index}
              deck={deck.childDeck}
              parentDeck={deck}
              parent={true}
            />
          );
        } else {
          return <DeckListItem key={index} deck={deck} />;
        }
      })}
    </View>
  );
};

export default DeckList;
