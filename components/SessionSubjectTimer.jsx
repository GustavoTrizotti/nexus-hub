import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import useTimer from "../hooks/useTimer";
import { timeFormatSession } from "../utils/timeFormatSession";
import SessionTimerButton from "./SessionTimerButton";

const SessionSubjectIndividualTimer = ({ color, name }) => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleReset,
    handleResume,
  } = useTimer(0);

  const session = {
    timer,
    isActive,
    isPaused,
    handleStart,
    handleReset,
    handleResume,
    handlePause,
  };

  return (
    <View className="flex w-full justify-between items-center flex-row my-2">
      <View className="flex w-fit flex-row items-center justify-center">
        <SessionTimerButton
          session={session}
          bgColor={color}
          padding="p-3"
          iconSize={24}
        />
        <Text className="text-center text-xl mx-4">{name}</Text>
      </View>
      <View className="flex w-fit p-3">
        <Text className="text-center text-2xl font-bold">{timeFormatSession(timer)}</Text>
      </View>
    </View>
  );
};

const SessionSubjectTimer = () => {
  return (
    <SafeAreaView>
      <ScrollView className="flex px-4 flex-col">
        <SessionSubjectIndividualTimer
          color="bg-subjectRed"
          name="Algorithms"
        />
        <SessionSubjectIndividualTimer
          color="bg-subjectYellow"
          name="Biology"
        />
        <SessionSubjectIndividualTimer
          color="bg-subjectGreen"
          name="Chemistry"
        />
        <SessionSubjectIndividualTimer
          color="bg-subjectBlue"
          name="English"
        />
        <SessionSubjectIndividualTimer
          color="bg-subjectPurple"
          name="History"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SessionSubjectTimer;
