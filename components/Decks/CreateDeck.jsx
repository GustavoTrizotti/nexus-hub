import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "react-native-toast-notifications";

const CreateDeck = ({ setDecks, closeModal }) => {
  const [deckName, setDeckName] = useState("");
  const [token] = useAuth();

  const toast = useToast();

  const handlePostDeck = async () => {
    await axios
      .post("http://192.168.0.12:8080/api/v1/decks/save", {
        name: deckName,
        subjectId: null,
        parentDeckId: null,
      }, {
        headers: {
          Authorization: token.auth
        }
      })
      .then((res) => {
        setDecks((prev) => [...prev, res.data])
        closeModal()
        toast.show(`${deckName} added!`, {
          type: "success",
          successColor: "#AD6FEB"
        })
      })
      .catch((e) => console.log(e));
  };

  return (
    <View className="flex relative justify-center items-center p-2 py-8 bg-white mx-4 my-8 h-fit rounded-lg">
      <View className="flex px-6 py-2 w-full">
        <Text className="text-xl text-center text-primary font-bold mb-4">
          New Deck
        </Text>
        <View>
          <TextInput
            className="flex p-4 bg-gray-100 mt-2 text-lg rounded-lg"
            placeholder="Name..."
            onChangeText={(e) => setDeckName(e)}
          />
        </View>
        <Pressable
          className="p-2 bg-primary mt-6 rounded-md"
          onPress={handlePostDeck}
        >
          <Text className="text-lg font-bold text-white text-center p-2">
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateDeck;
