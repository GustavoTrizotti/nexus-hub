import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SessionTimerHeader from "../components/Session/SessionCounterHeader";
import SessionSubjectTimer from "../components/Session/SessionSubjectTimer";
import { useSelector } from "react-redux";

export default function Sessions() {
  const { sessions } = useSelector((rootReducer) => rootReducer.sessionReducer);

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
