import { View, Text, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SubjectCardDifficulty from "./SubjectCardDifficulty";
import { changeTextColor } from "../../utils/textColorHex";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SubjectCard = ({ subject, scrollRef, onDissmiss }) => {
  const color = subject.color;
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue("100%");
  const itemWidth = useSharedValue("100%");
  const opacity = useSharedValue(1);

  const textColor = changeTextColor(color, "#602f91", "#f1e3ff")

  const width = Dimensions.get("screen").width;
  const threshold = -width * 0.3;

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      if (event.translationX > 0) {
        translateX.value = 0;
      }
    },
    onEnd: (event) => {
      const isDissmissed = translateX.value < threshold;
      if (isDissmissed) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0, {
          duration: 2000,
        });
        itemWidth.value = withTiming(0, {
          duration: 2000,
        });
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDissmiss) {
            runOnJS(onDissmiss)(subject.id);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const reanimatedDeleteStyle = useAnimatedStyle(() => {
    return {
      width: itemWidth.value,
      height: itemHeight.value,
      opacity: opacity.value,
    };
  });
  return (
    <GestureHandlerRootView className="flex w-full flex-row my-4 justify-center items-center">
      <Animated.View
        style={[
          {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          },
          reanimatedDeleteStyle,
        ]}
        className="bg-red-400 p-4 rounded-lg w-full h-full"
      >
        <Icon name="trash-can" size={50} color="#FFF" />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={scrollRef}
        onGestureEvent={panGesture}
      >
        <Animated.View
          className="w-full justify-between items-center px-4 py-12 rounded-lg"
          style={[reanimatedStyle, {backgroundColor: textColor}]}
        >
          <Text className="text-2xl font-bold mb-8 p-2 text-center" style={{color: color, borderBottomWidth: 4, borderColor: color}}>
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
