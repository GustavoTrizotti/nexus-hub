import { View, Text } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

import ReactNativeModal from "react-native-modal";
import FlashcardMenu from "./FlashcardMenu";

const FlashcardHeader = ({ deck }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View className=" p-4 flex flex-row items-center justify-center">
      <View className="flex flex-2">
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
      <View className="flex flex-2">
        <Pressable onPress={() => setIsMenuVisible(true)}>
          <Icon name="ellipsis-v" size={24} color="#AD6FEB" />
        </Pressable>
      </View>
      <ReactNativeModal
        isVisible={isMenuVisible}
        onBackdropPress={() => setIsMenuVisible(false)}
      >
        <FlashcardMenu />
      </ReactNativeModal>
    </View>
  );
};

export default FlashcardHeader;
