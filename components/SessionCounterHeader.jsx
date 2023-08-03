import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import useTimer from "../hooks/useTimer";
import { timeFormatSession }from "../utils/timeFormatSession";
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

  const session = {timer, isActive, isPaused, handleStart, handleResume, handlePause}

  return (
    <View className="flex w-full justify-evenly items-center flex-row p-4">
      <SessionTimerButton session={session}/>
      <View className="flex justify-center items-center p-2 gap-2">
        <Text className="text-center text-lg">Session</Text>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-center text-4xl">{timeFormatSession(timer)}</Text>
        </View>
      </View>
    </View>
  );
};

export default SessionTimerHeader;
