import { View, Text, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
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
  const updateOpacity = useSharedValue(0);
  const deleteOpacity = useSharedValue(0);
  const [onDissmissDelete, onDissmissUpdate] = onDissmiss;

  const textColor = changeTextColor(color, "#602f91", "#f1e3ff");

  const width = Dimensions.get("screen").width;
  const thresholdDelete = -width * 0.3;
  const thresholdEdit = width * 0.3;

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      if (translateX.value < 0) {
        deleteOpacity.value = withTiming(1, { duration: 200 });
      } else if (translateX.value > 0) {
        updateOpacity.value = withTiming(1, { duration: 200 });
      } else {
        deleteOpacity.value = 0;
        updateOpacity.value = 0;
      }
    },
    onEnd: (event) => {
      if (translateX.value < thresholdDelete) {
        translateX.value = withTiming(-width);
        itemHeight.value = withTiming(0, {
          duration: 2000,
        });
        itemWidth.value = withTiming(0, {
          duration: 2000,
        });
        deleteOpacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDissmissDelete) {
            runOnJS(onDissmissDelete)(subject.id);
          }
        });
      } else if (translateX.value > thresholdEdit) {
        translateX.value = withTiming(0, { duration: 300 });
        if (onDissmissUpdate) {
          runOnJS(onDissmissUpdate)(subject.id);
        }
      } else {
        translateX.value = withTiming(0, { duration: 300 });
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
    opacity: opacity.value,
  }));

  const reanimatedDelete = useAnimatedStyle(() => {
    return {
      width: itemWidth.value,
      height: itemHeight.value,
      opacity: deleteOpacity.value,
    };
  });

  const reanimatedUpdate = useAnimatedStyle(() => {
    return {
      width: itemWidth.value,
      height: itemHeight.value,
      opacity: updateOpacity.value,
    };
  });

  return (
    <GestureHandlerRootView className="flex w-full flex-row mb-4 justify-center items-center">
      <Animated.View
        style={[
          {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          },
          reanimatedDelete,
        ]}
        className="bg-red-400 p-4 rounded-lg w-full h-full"
      >
        <Icon name="trash-can" size={50} color="#FFF" />
      </Animated.View>
      <Animated.View
        style={[
          {
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          },
          reanimatedUpdate,
        ]}
        className="bg-yellow-400 p-4 rounded-lg w-full h-full"
      >
        <Icon name="pencil" size={50} color="#FFF" />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={scrollRef}
        onGestureEvent={panGesture}
      >
        <Animated.View
          className="w-full justify-between items-center px-4 py-12 rounded-lg"
          style={[reanimatedStyle, { backgroundColor: textColor }]}
        >
          <Text
            className="text-2xl font-bold mb-8 p-2 text-center"
            style={{ color: color, borderBottomWidth: 4, borderColor: color }}
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

const SubjectCardDifficulty = ({ diff, color }) => {
  const diffArray = [];

  for (let i = 0; i < 5; i++) {
    if (i >= diff) {
      diffArray.push(1);
    } else {
      diffArray.push(0);
    }
  }

  return (
    <View className="flex flex-row gap-x-1">
      {diffArray.map((diff, idx) => {
        if (diff == 1) {
          return (
            <Icon key={idx} name="circle-outline" size={16} color={color} />
          );
        } else if (diff == 0) {
          return <Icon key={idx} name="circle" size={16} color={color} />;
        }
      })}
    </View>
  );
};

export default SubjectCard;
