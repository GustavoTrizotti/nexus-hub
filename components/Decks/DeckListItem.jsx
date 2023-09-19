import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const DeckListItem = ({ deck, parent }) => {
  const [cardList, setCardList] = useState([]);
  const [token] = useAuth();

  const getCardList = async (deckId) => {
    const url = `http://192.168.0.12:8080/api/v1/flashcards/${deckId}/all`;
    await axios
      .request({
        method: "get",
        url: url,
        data: { id: deckId },
        headers: {
          Authorization: token.auth,
        },
      })
      .then((res) => setCardList(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getCardList(deck.id);
  }, []);

  const iconName = parent ? "chevron-right" : "cards-variant";
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Deck", { deck: deck, cards: cardList })
        }
        className="flex p-4 mb-2 mx-3 flex-row items-center justify-between border-b-2 border-gray-100"
      >
        <View className="flex flex-row justify-center items-center gap-4">
          <Icon name={iconName} size={30} color="#AD6FEB" />
          <Text className="text-xl font-bold text-primary"> {deck.name} </Text>
        </View>
        <Text className="text-lg font-bold text-tertiary opacity-40">
          {cardList.length}
        </Text>
      </Pressable>
    </View>
  );
};

export default DeckListItem;
