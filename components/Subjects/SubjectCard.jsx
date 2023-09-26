import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubjectCardDifficulty from "./SubjectCardDifficulty";
import { changeTextColor } from "../../utils/textColorHex";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SubjectCard = ({ subject }) => {
  const bgColor = subject.color;
  const colors = {
    color: subject.color,
    dark: "#FFF",
    light: "#2E2E2E",
  };

  const color = changeTextColor(colors.color, colors.dark, colors.light);
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      translateX.value = withTiming(0);
    }, 
  });

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <GestureHandlerRootView className="flex w-full flex-row my-4">
      <View style={{
        position: 'absolute',
        right: '1%',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
         <Icon name="trash-can" size={60} color="#f7473e"/>
      </View>
      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View
          className="w-full justify-center items-center px-4 py-12 rounded-lg"
          style={[reanimatedStyle, { backgroundColor: bgColor }]}
        >
          <Text
            className="text-2xl text-tertiary font-bold mb-8 text-center"
            style={{ color: color }}
          >
            {subject.name}
          </Text>
          <View className="flex flex-row items-center justify-center">
            <Icon name="fire" size={30} color={color} />
            <SubjectCardDifficulty diff={subject.difficulty} color={color} />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default SubjectCard;
