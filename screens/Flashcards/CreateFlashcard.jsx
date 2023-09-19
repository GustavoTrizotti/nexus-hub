import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCardBody from "../../components/Flashcards/CreateFlashcard/CreateCardBody";
import CreateCardTag from "../../components/Flashcards/CreateFlashcard/CreateCardTag";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";

const CreateFlashcard = ({ title, card }) => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <MainHeader title={"Flashcards"} />
        <View>
          <Text className="text-xl text-center font-bold text-primary">
            {title}
          </Text>
          <Text className="text-lg text-center font-bold text-tertiary my-2">
            Create Flashcard
          </Text>
        </View>
        <View className="p-4 flex justify-center items-center">
          <CreateCardBody />
          <Pressable className="p-4 mt-6 px-6 bg-primary rounded-md">
            <Text className="text-lg text-center text-white font-bold">
              Save Changes
            </Text>
          </Pressable>
        </View>
        {card ? (
          <View className="p-4 flex justify-center items-center">
            <CreateCardTag card={card} />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateFlashcard;
