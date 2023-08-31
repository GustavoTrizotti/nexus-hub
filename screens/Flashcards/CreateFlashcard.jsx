import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCardBody from "../../components/Flashcards/CreateFlashcard/CreateCardBody";

const CreateFlashcard = ({ route }) => {
  const title = route.params.title;

  return (
    <SafeAreaView className="bg-white h-full">
      <MainHeader title={"Flashcards"}/>
      <View>
        <Text className="text-xl text-center font-bold text-primary">{title}</Text>
        <Text className="text-lg text-center font-bold text-tertiary p-2">Create Flashcard</Text>
      </View>
      <View>
        <CreateCardBody />
      </View>
    </SafeAreaView>
  );
};

export default CreateFlashcard;
