import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {createDeck} from "../../redux/deck/slice"
 
const CreateDeck = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleCreateDeck = () => {
    console.log("Teste");
    dispatch(createDeck({name: name}))
  }

  return (
    <View className="flex relative justify-center items-center p-2 py-8 bg-white mx-4 my-8 h-fit rounded-lg">
      <View className="flex px-6 py-2 w-full">
        <Text className="text-xl text-center text-primary font-bold mb-4">New Deck</Text>
        <View>
          <TextInput className="flex p-4 bg-gray-100 mt-2 text-lg rounded-lg" placeholder="Name..." onChange={e => setName(e)}/>
        </View>
        <Pressable className="p-2 bg-primary mt-6 rounded-md" onPress={handleCreateDeck}>
          <Text className="text-lg font-bold text-white text-center p-2">Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateDeck;
