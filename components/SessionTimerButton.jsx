import { View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SessionTimerButton = ({ session }) => {
  const { isActive, isPaused, handleStart, handlePause, handleResume } =
    session;

  const handlePauseIcon = () => {
    if (isActive) {
      if (isPaused) {
        return <Icon name="pause" size={36} color="#fff" />;
      }
    }
    return <Icon name="play" size={36} color="#fff" />;
  };

  return (
    <View>
      <Pressable
        onPress={() => {
          if (isActive) {
            if (isPaused) {
              handlePause();
            } else {
              handleResume();
            }
          } else {
            handleStart();
          }
        }}
        className="bg-primary p-8 rounded-full transition-opacity hover:opacity-50"
      >
        {handlePauseIcon}
      </Pressable>
    </View>
  );
};

export default SessionTimerButton;
