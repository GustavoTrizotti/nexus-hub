import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
  View,
  Image,
  Text,
} from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView className="flex items-center justify-center bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex w-full h-full justify-center items-center"
      >
        <Pressable
          onPress={Keyboard.dismiss}
          className="flex w-full h-full items-center justify-center p-4 px-6"
        >
          <View>
            <Image source={require("../assets/logo.png")} />
          </View>
          <Text className="font-bold text-2xl uppercase text-primary mt-4">
            Login
          </Text>
          <LoginForm />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
