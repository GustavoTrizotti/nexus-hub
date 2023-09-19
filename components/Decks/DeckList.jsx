import { View } from "react-native";
import React, { useEffect, useState } from "react";

import DeckListItem from "./DeckListItem";
import DeckListChildItem from "./DeckListChildItem";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const DeckList = ({ decks }) => {

  const [token] = useAuth();

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
          return <DeckListItem key={deck.id} deck={deck} />;
        }
      })}
    </View>
  );
};

export default DeckList;
