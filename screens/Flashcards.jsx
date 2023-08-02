import { Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import CardHeader from "../components/FlashcardHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Flashcards({ navigation }) {
  return (
    <SafeAreaView>
      <MainHeader title={"Cards"} />
      <View className="flex bg-white w-full h-full">
        <CardHeader />
        <View className="flex justify-center items-center">
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Card")}>
            <Text>Card</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}
