import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ReactNativeModal from "react-native-modal";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const EditDeckModal = ({ isVisible, setIsVisible, deck, setDeck }) => {
  const [deckName, setDeckName] = useState("");
  const [token] = useAuth();

  const handleUpdateDeck = async (deckId) => {
    await axios
      .put(
        `http://192.168.0.12:8080/api/v1/decks/${deckId}`,
        {
          id: deckId,
          name: deckName,
          subjectId: null,
          parentDeckId: null,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      )
      .then((res) => {
        setDeck(res.data);
        setIsVisible(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <ReactNativeModal
      propagateSwipe={true}
      onBackdropPress={() => setIsVisible(false)}
      onSwipeComplete={() => setIsVisible(false)}
      swipeDirection={"down"}
      isVisible={isVisible}
      className="flex justify-end"
    >
      <View className="flex bg-white p-8 px-6 w-full justify-evenly rounded-md">
        <View className="border-t-4 border-gray-200 w-full flex items-center">
          <Text className="p-4 text-lg uppercase font-bold text-primary">
            Edit Deck
          </Text>
        </View>
        <View className="p-2 mt-2">
          <Text className="py-2 text-lg text-primary font-bold">Deck Name</Text>
          <TextInput
            className="flex p-4 w-full bg-gray-100 mt-2 text-lg rounded-lg"
            placeholder="Name..."
            onChangeText={(e) => setDeckName(e)}
          />
        </View>
        <View className="p-2 mt-2">
          <Pressable
            className="p-2 bg-primary mt-6 rounded-md"
            onPress={() => handleUpdateDeck(deck.id)}
          >
            <Text className="text-lg font-bold text-white text-center p-2">
              Save Changes
            </Text>
          </Pressable>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default EditDeckModal;
