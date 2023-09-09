import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
  Image,
  Text,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <LinearGradient
      colors={["#CF9EFF", "#AD6FEB"]}
      className="flex w-full h-full p-4"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex w-full h-full justify-center"
      >
        <Pressable onPress={Keyboard.dismiss} className="flex w-full h-full items-center justify-between">
          <Text>Text</Text>
          <LoginForm />
        </Pressable>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
