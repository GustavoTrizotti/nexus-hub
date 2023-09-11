import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import FormInput from "./FormInput";

const LoginForm = () => {
  return (
    <View className="flex w-full m-4 gap-y-6 h-1/2 justify-center">
      <View>
        <FormInput name="account" placeholder="Username..." color="#AD6FEB" />
      </View>
      <View>
        <FormInput name="key" placeholder="Password..." color="#AD6FEB" isPassword={true}/>
      </View>
      <View className="flex p-2 mt-4 mx-4">
        <Pressable className="flex bg-primary p-4 items-center justify-center rounded-full">
          <Text className="text-white font-bold text-lg text-center uppercase">Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;
