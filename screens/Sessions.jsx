import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SessionTimerHeader from "../components/SessionCounterHeader";

export default function Sessions() {
  return (
    <SafeAreaView>
      <MainHeader title="Sessions" />
      <View className="flex h-full px-3 bg-white">
        <SessionTimerHeader />
      </View>
    </SafeAreaView>
  );
}
