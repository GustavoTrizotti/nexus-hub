import { View, Text, TextInput } from "react-native";
import React from "react";
import MainHeader from "../MainHeader";
import KeyboardAvoidWrapper from "../utils/KeyboardAvoidWrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CreateDifficulty from "./CreateDifficulty";

const CreateSubject = () => {
  return (
    <KeyboardAvoidWrapper bgColor="#FFF">
      <MainHeader title="SUBJECTS" />
      <View className="flex h-full">
        <View className="flex items-center justify-center flex-row">
          <Icon name="book-plus-multiple" size={24} color="#AD6FEB" />
          <Text className="p-4 text-lg text-primary font-bold uppercase text-center">
            Create Subjects
          </Text>
        </View>

        <View>
          <View className="flex p-4">
            <View className="p-2">
              <Text className="font-bold text-lg text-primary">
                Subject Name
              </Text>
              <TextInput
                placeholder="Subject name..."
                className="flex border-b-2 border-gray-200 p-4 text-lg my-2"
              />
            </View>
            <View className="p-2 mt-2">
              <Text className="font-bold text-lg text-primary">Difficulty</Text>
              <CreateDifficulty />
            </View>
            <View className="p-2 mt-2">
              <Text className="font-bold text-lg text-primary">Color</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default CreateSubject;
