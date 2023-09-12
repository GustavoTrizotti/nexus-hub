import {
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
  Keyboard,
  Text,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "../components/Register/RegisterForm";
import { StatusBar } from "expo-status-bar";

const Register = () => {
  return (
    <SafeAreaView className="flex items-center justify-center bg-primary">
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex w-full h-full justify-center items-center"
      >
        <Pressable
          onPress={Keyboard.dismiss}
          className="flex w-full h-full items-center justify-center px-6"
        >
          <View className="bg-white p-8 rounded-full">
            <Image source={require("../assets/logo.png")} />
          </View>
          <Text className="font-bold text-2xl mt-4 uppercase text-white">
            Register
          </Text>
          <RegisterForm />
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
