import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DeckListItem = ({ deck, parent }) => {
  const iconName = parent ? "chevron-right" : "cards-variant";

  return (
    <View className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100">
      <View className="flex flex-row justify-center items-center gap-4">
        <Icon name={iconName} size={30} color="#AD6FEB" />
        <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
      </View>
      <Text className="text-lg font-bold text-tertiary opacity-40">{deck.cards.length}</Text>
    </View>
  );
};

export default DeckListItem;
