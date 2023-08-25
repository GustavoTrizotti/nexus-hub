import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreateDeck = ({handleSetModalHidden}) => {
  return (
    <View className="flex relative justify-center items-center p-4 bg-white mx-8 my-8 h-fit rounded-lg border-t-8 border-primary">
      <Pressable onPress={() => handleSetModalHidden()} className="absolute right-0 top-0 p-4">
        <Icon name="close" size={24} color={"#AD6FEB"}/>
      </Pressable>
      <View className="flex p-4 w-full">
        <Text className="text-lg text-primary font-bold">New Deck</Text>
        <View>
          <TextInput className="flex p-2 bg-gray-100 mt-2 text-lg" placeholder="Name..."/>
        </View>
        <Pressable className="p-2 bg-primary mt-4">
          <Text className="">Save Changes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateDeck;
