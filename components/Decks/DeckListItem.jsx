import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const DeckListItem = ({ deck, parent }) => {
  const [cardList, setCardList] = useState([])

  const handleGetCards = async () => {
    await axios.get()
  }

  const iconName = parent ? "chevron-right" : "cards-variant";
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Deck", {deck: deck, length: cardList.length})} className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100">
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name={iconName} size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          {cardList.length}
        </Text>
      </Pressable>
    </View>
  );
};

export default DeckListItem;
