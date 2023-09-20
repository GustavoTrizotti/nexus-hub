import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import axios from "axios";

const CreateDeck = ({setDecks}) => {
  const [deckName, setDeckName] = useState('');

  const handlePostDeck = async () => {
    await axios.post('http://192.168.0.12:8080/api/v1/decks/save', {
      name: deckName,
      subjectId: null,
      parentDeckId: null,
    }).then(res => setDecks((prev) => [...prev, res.data]))
  }

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
        <Pressable className="p-2 bg-primary mt-6 rounded-md">
          <Text className="text-lg font-bold text-white text-center p-2">
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateDeck;
