import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

const CardSheet = ({ deck, card, name }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="flex justify-between flex-col bg-primary py-10 px-2 m-4 w-auto rounded-lg shadow-sm"
      onPress={() => {
        navigation.navigate("Card", {
          card: card,
          deck: deck,
        });
      }}
    >
      <Text className="text-center p-2 font-bold text-lg text-white">
        {name}
      </Text>
      <View className="flex py-6 px-4">
        <Text className="text-md text-white">{card.question}</Text>
      </View>
      <View className="flex justify-center items-center p-2">
        <Icon name="magnify" size={24} color={"#FFF"} />
      </View>
    </Pressable>
  );
};

export default CardSheet;
