import { View, Text } from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cycle() {
  return (
    <SafeAreaView>
      <MainHeader title="Cycle" />
      <View className="flex h-full justify-center items-center bg-white">
        <Text>Cycle</Text>
      </View>
    </SafeAreaView>
  );
}
