import { View, Text, Pressable } from "react-native";
import React, {  useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useFlashcard } from "../../context/FlashcardContext"
import { useEffect } from "react";

const DeckListItem = ({ deck, parent }) => {

  const iconName = parent ? "chevron-right" : "cards-variant";
  const navigation = useNavigation();

  const { getSubjects } = useFlashcard()
  const [flashcardList, setFlashcardList] = useState([])

  const handleGetFlashcards = () => {
    setFlashcardList(getSubjects())
  }

  useEffect(() => {
    handleGetFlashcards();
  }, [])

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Deck", {
            deck: deck,
          })
        }
        className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100"
      >
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name={iconName} size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          0
        </Text>
      </Pressable>
    </View>
  );
};

export default DeckListItem;
