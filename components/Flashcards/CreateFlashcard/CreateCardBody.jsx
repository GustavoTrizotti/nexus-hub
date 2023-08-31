import { View, Text, TextInput } from "react-native";
import React from "react";

const CreateCardBody = () => {
  return (
    <View className="flex w-full">
      <View>
        <Text className="font-bold text-lg p-2 text-primary">Question</Text>
        <TextInput
          placeholder="Question..."
          multiline
          numberOfLines={5}
          className="bg-gray-100 p-4 rounded-lg text-lg"
        />
      </View>
      <View>
        <Text className="font-bold text-lg p-2 text-primary">Answer</Text>
        <TextInput
          placeholder="Answer..."
          multiline
          numberOfLines={5}
          className="bg-gray-100 p-4 rounded-lg text-lg"
        />
      </View>
    </View>
  );
};

export default CreateCardBody;
