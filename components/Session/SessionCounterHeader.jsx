import { View, Text } from "react-native";
import React from "react";

import useTimer from "../../hooks/useTimer";
import { timeFormatSession } from "../../utils/timeFormatSession";
import SessionTimerButton from "./SessionTimerButton";

const SessionTimerHeader = () => {
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
    <View className="flex w-full justify-evenly items-center flex-row p-4">
      <SessionTimerButton
        session={session}
        bgColor="bg-primary"
        padding="p-8"
        iconSize={36}
      />
      <View className="flex justify-center items-center p-2 gap-2">
        <Text className="text-center text-lg">Current Session</Text>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-center text-4xl">
            {timeFormatSession(timer)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SessionTimerHeader;
