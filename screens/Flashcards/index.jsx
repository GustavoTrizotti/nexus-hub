import { View } from "react-native";
import React from "react";
import CardHeader from "../../components/CardsHeader";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Flashcards() {
  return (
    <SafeAreaView>
      <View className="flex bg-white w-full h-full">
        <MainHeader title={"Cards"}/>
        <CardHeader />
      </View>
    </SafeAreaView>
  );
}
