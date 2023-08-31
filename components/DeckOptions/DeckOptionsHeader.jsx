import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";

const DeckOptionsHeader = ({ title, navigation, card }) => {
  return (
    <View className="flex px-2 flex-row w-full justify-between items-center">
      <View className="flex flex-col p-3">
        <View className="flex flex-row items-center align-center gap-2">
          <Text className="text-primary font-bold text-xl">{title}</Text>
          <Icon name="cards" color="#AD6FEB" size={24} />
        </View>
        <Text className="text-tertiary text-md py-1">
          Spaced Revision Decks
        </Text>
      </View>
      <View className="flex flex-col p-3">
        <Pressable
          className="flex flex-row bg-primary p-3 px-2 rounded-md items-center justify-between gap-x-2"
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("CreateCard", {title: title, card: card});
          }}
        >
          <Icon name="cards" color="#FFFFFF" size={24}/>
          <Text className="text-white text-md uppercase font-bold px-2">
            New Card
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DeckOptionsHeader;
