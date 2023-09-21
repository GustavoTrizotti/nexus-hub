import { View, Text, TextInput } from "react-native";
import React from "react";
import MainHeader from "../MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateSubject = () => {
  return (
    <SafeAreaView className="flex h-full w-full bg-white">
      <MainHeader title="SUBJECTS"/>
      <View className="flex h-full">
        <Text className="p-4 text-lg text-primary font-bold uppercase text-center">Create Subjects</Text>
        <View>
            <View>
              <View>
                <Text></Text>
                <TextInput placeholder=""/>
              </View>
              <View>
                {/* Difficulty */}
                
              </View>
            </View>
            
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateSubject;
