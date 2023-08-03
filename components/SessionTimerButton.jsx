import { View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SessionTimerButton = ({ session, bgColor, padding, iconSize }) => {
  const {
    isActive,
    isPaused,
    handleStart,
    handleReset,
    handlePause,
    handleResume,
  } = session;

  const buttonClassStyle = `${bgColor} ${padding} rounded-full`;

  const handlePauseIcon = () => {
    if (isActive) {
      if (isPaused) {
        return <Icon name="pause" size={iconSize} color="#fff" />;
      }
    }
    return <Icon name="play" size={iconSize} color="#fff" />;
  };

  return (
    <View className="flex flex-row">
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
        onLongPress={() => handleReset() }
        className={buttonClassStyle}
      >
        {handlePauseIcon}
      </Pressable>
    </View>
  );
};

export default SessionTimerButton;
