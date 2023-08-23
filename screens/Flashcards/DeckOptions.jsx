import { View, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../../components/MainHeader";
import DeckOptionsChart from "../../components/DeckOptions/DeckOptionsChart";
import DeckOptionsHeader from "../../components/DeckOptions/DeckOptionsHeader";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import randomCard from "../../utils/randomCard"
import { useNavigation } from "@react-navigation/native";

const DeckOptions = ({ route }) => {
  const deck = route.params.deck;
  const selectedCard = randomCard(deck.cards)

  const navigation = useNavigation();
  
  return (
    <SafeAreaView className="flex bg-white h-full w-full">
      <MainHeader title={deck.name} />
      <View>
        <DeckOptionsHeader title={deck.name} />
        <View className="flex items-center justify-center mt-4">
          <DeckOptionsChart deck={deck} />
          <View className="flex flex-row mt-6 mx-2 items-center justify-between">
            <Pressable className="flex flex-1 bg-primary p-4 m-2 rounded-md" onPress={() => {
              navigation.navigate("Card", {card: selectedCard, deck: deck})
            }}>
              <Text className="w-fit text-lg uppercase font-bold text-white text-center">
                Study
              </Text>
            </Pressable>
            <Pressable className="flex flex-2 h-fit bg-primary p-4 m-2 rounded-md">
              <Icon name="pencil" size={24} color="#FFF" />
            </Pressable>
            <Pressable className="flex flex-2 bg-primary p-4 m-2 rounded-md">
              <Icon name="delete" size={24} color="#FFF" />
            </Pressable>
          </View> 
        </View>
        {/* TODO - Flashcard List */}
      </View>
    </SafeAreaView>
  );
};

export default DeckOptions;