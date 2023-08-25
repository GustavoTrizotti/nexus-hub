import { View, Text } from "react-native";
import React, { useState } from "react";

import DeckListItem from "./DeckListItem";
import db from "../../utils/dataDeckObject";
import DeckListChildItem from "./DeckListChildItem";

const DeckList = () => {
  const [decks, setDecks] = useState(db.decks);

  return (
    <View className="flex px-2">
      {decks.map((deck, index) => {
        if (deck.childDeck) {
          return <DeckListChildItem key={index} deck={deck.childDeck} parentDeck={deck} parent={true}/>;
        } else {
          return <DeckListItem key={index} deck={deck}/>;
        }
      })}
    </View>
  );
};

export default DeckList;
