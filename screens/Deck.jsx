import { Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import CardHeader from "../components/Deck/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Deck/DeckList";

export default function Decks({ navigation }) {
  return (
    <SafeAreaView>
      <MainHeader title={"Cards"} />
      <View className="flex bg-white w-full h-full">
        <CardHeader />
        <DeckList />
      </View>
    </SafeAreaView>
  );
}
