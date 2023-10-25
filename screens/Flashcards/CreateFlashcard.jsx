import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateCardBody from "../../components/Flashcards/CreateFlashcard/CreateCardBody";
import MainHeader from "../../components/MainHeader";

const CreateFlashcard = ({ deck }) => {
  const flashcard = useState()

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <MainHeader title={"Flashcards"} />
        <View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateFlashcard;

const TagList = () => {
  return (
    <></>
  )
}