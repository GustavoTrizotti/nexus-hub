import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SessionTimerHeader = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const interval = null;
    if (timerOn) {
        interval = setInterval(() => {
            setTime()
        }, 10);
    } else {

    }
  }, [timerOn]);

  return (
    <View className="flex w-full justify-evenly items-center flex-row p-4">
      <Pressable
        onPress={() => setTimerOn(!timerOn)}
        className="bg-primary p-8 rounded-full"
      >
        { timerOn ? 
        (<Icon name="pause" size={36} color="#fff" />) : 
        (<Icon name="play" size={36} color="#fff" />)}
      </Pressable>

      <View className="flex justify-center items-center p-2 gap-2">
        <Text className="text-center text-lg">Session</Text>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-4xl">
            {time.hours >= 10 ? time.hours : "0" + time.hours}:
          </Text>
          <Text className="text-4xl">
            {time.minutes >= 10 ? time.minutes : "0" + time.minutes}:
          </Text>
          <Text className="text-4xl">
            {time.seconds >= 10 ? time.seconds : "0" + time.seconds}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SessionTimerHeader;
