import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SessionTimerHeader from "../components/Session/SessionCounterHeader";
import SessionSubjectTimer from "../components/Session/SessionSubjectTimer";

export default function Sessions() {

  return (
    <SafeAreaView>
      <MainHeader />
      <View className="flex h-full px-3 bg-white">
        <SessionTimerHeader />
        <SessionSubjectTimer />
      </View>
    </SafeAreaView>
  );
}
