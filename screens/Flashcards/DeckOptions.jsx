import { View, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../../components/MainHeader";
import DeckOptionsChart from "../../components/DeckOptions/DeckOptionsChart";

const DeckOptions = ({ route }) => {
  const deck = route.params.deck;
  return (
    <SafeAreaView className="flex bg-white h-full w-full">
      <MainHeader title={deck.name}/>
      <DeckOptionsChart />
    </SafeAreaView>
  );
};

export default DeckOptions;
