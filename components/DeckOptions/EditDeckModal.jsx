import React from "react";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useDeck } from "../../context/DeckContext";

const EditDeckModal = ({ isVisible, setIsVisible, deck }) => {
  const [deckUpdate, setDeckUpdate] = useState(deck);
  const { updateDeck, isLoading } = useDeck();

  const handleUpdateDeck = (deck) => {
    try {
      updateDeck(deck);
    } catch (error) {
      console.log("Error handling the update deck: ", error);
    }
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
            onChangeText={(e) => setDeckUpdate({ ...deck, name: e })}
            value={deckUpdate.name}
          />
        </View>
        <View className="p-2 mt-2">
          <Pressable
            className="p-2 bg-primary mt-6 rounded-md"
            onPress={() => handleUpdateDeck(deckUpdate)}
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
