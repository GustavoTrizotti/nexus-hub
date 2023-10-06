import { View, Text, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

const CardSheet = ({ deck, card, name }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="flex justify-between items-center flex-row bg-primary p-2 w-full m-4 rounded-lg shadow-sm"
      onPress={() => {
        navigation.navigate("Card", {
          card: card,
          deck: deck,
        });
      }}
    >
      <View className="flex p-2">
        <Text className="font-bold uppercase opacity-50 text-lg text-white">
          {name}
        </Text>
        <View className="flex">
          <Text className="text-md text-white">{card.question}</Text>
        </View>
      </View>
      <View className="flex justify-center items-center p-2">
        <Icon name="magnify" size={24} color={"#FFF"} />
      </View>
    </Pressable>
  );
};

export default CardSheet;
