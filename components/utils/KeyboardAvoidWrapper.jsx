import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const KeyboardAvoidWrapper = ({ children, bgColor }) => {
  return (
    <SafeAreaView className="flex w-full h-full" style={{backgroundColor: bgColor}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex w-full h-full"
        style={{ backgroundColor: bgColor }}
      >
        <Pressable
          onPress={Keyboard.dismiss}
          className="flex w-full h-full"
          style={{ backgroundColor: bgColor }}
        >
          {children}
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default KeyboardAvoidWrapper;
