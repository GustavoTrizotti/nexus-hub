import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const FlashcardHeader = ({length, deckName}) => {
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
          {deckName}
        </Text>
        <Text className="text-tertiary text-center text-lg font-bold opacity-40">
          {/* TODO - UPDATE COUNT ON CARD CHANGE */}
          1/{length}
        </Text>
      </View>
    </View>
  );
};

export default FlashcardHeader;
