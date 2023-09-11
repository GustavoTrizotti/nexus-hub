import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login = () => {
  return (
    <SafeAreaView className="flex items-center justify-center bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex w-full h-full justify-center items-center"
      >
        <Pressable
          onPress={Keyboard.dismiss}
          className="flex w-full h-full items-center justify-evenly p-4 px-6"
        >
          <View className="w-full flex justify-center items-center gap-y-40">
            <Icon name="cube" color={"#AD6FEB"} size={120}/>
            <LoginForm />
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
