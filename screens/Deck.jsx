import { Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import CardHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Decks/DeckList";

export default function Decks({ navigation }) {
  return (
    <SafeAreaView>
      <MainHeader/>
      <View className="flex bg-white w-full h-full">
        <CardHeader />
        <DeckList />
      </View>
    </SafeAreaView>
  );
}
