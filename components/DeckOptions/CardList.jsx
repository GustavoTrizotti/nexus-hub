import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CardList = ({ deck, cards }) => {
  return (
    <View className="p-4">
      <View className="flex flex-row p-4 border-t-2 border-gray-200 w-full items-center justify-center">
        <Text className="text-xl text-center uppercase font-bold text-primary">
          Card List
        </Text>
      </View>
      <View className="flex items-center justify-center w-full">
        {cards.map((card) => {
          return (
            <CardSheet key={card.id} deck={deck} card={card} name={deck.name} />
          );
        })}
      </View>
    </View>
  );
};

const CardSheet = ({ deck, card, name }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="flex justify-between items-center flex-row bg-primary p-2 w-full m-4 rounded-lg shadow-sm"
      onPress={() => {
        navigation.navigate("Flashcard", {
          card: card,
          deck: deck,
        });
      }}
    >
      <View className="flex flex-row justify-center items-center gap-x-2 ml-1">
        <Icon name="cards" color="#FFF" size={24}/>
        <View className="flex flex-row justify-between flex-1">
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
        </View>
      </View>
    </Pressable>
  );
};

export default CardList;
