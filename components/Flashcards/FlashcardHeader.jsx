import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const FlashcardHeader = ({ deck }) => {
  const navigation = useNavigation();

  return (
    <View className=" p-6 flex flex-row items-center justify-center">
      <View className="flex flex-2 justify-self-start">
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#AD6FEB" />
        </Pressable>
      </View>
      <View className="flex flex-1 flex-col">
        <Text className="text-primary text-center text-2xl font-bold">
          {deck.name}
        </Text>
        <Text className="text-tertiary text-center text-lg font-bold opacity-40">
          {/* TODO - UPDATE COUNT ON CARD CHANGE */}
          1/{deck.cards.length}
        </Text>
      </View>
    </View>
  );
};

export default FlashcardHeader;
