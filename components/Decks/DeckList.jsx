import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDeck } from "../../context/DeckContext";

const DeckList = ({ setModalVisible, setIsCreateChild }) => {
  const { decks, getDecks } = useDeck();

  useEffect(() => {
    const fetchData = async () => {
      getDecks();
    };
    fetchData();
  }, []);

  return (
    <ScrollView className="flex px-2">
      {decks.map((deckMap) => {
        return (
          <DeckListItem
            key={deckMap.id}
            deck={deckMap}
            setModalVisible={setModalVisible}
            setIsCreateChild={setIsCreateChild}
          />
        );
      })}
    </ScrollView>
  );
};

const DeckListItem = ({ deck, setModalVisible, setIsCreateChild }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Deck", { deck: deck })}>
      <View className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100">
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name="cards-variant" size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary">{deck.name}</Text>
        </View>
        <View className="flex flex-row justify-center items-center gap-x-4">
          <Icon
            name="plus"
            size={30}
            color="#bbb"
            onPress={() => {
              setModalVisible(true);
              setIsCreateChild(deck);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default DeckList;