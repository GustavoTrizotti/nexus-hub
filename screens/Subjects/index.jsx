import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../../components/MainHeader";

const Subjects = () => {
  return (
    <SafeAreaView>
      <MainHeader title="Subjects" />
      <View className="flex h-full justify-center items-center bg-white">
        <Text>Subjects</Text>
      </View>
    </SafeAreaView>
  );
};

export default Subjects;
