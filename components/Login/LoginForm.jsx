import { View, Text, Pressable } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {

  const navigation = useNavigation();

  return (
    <View className="flex w-full m-4 gap-y-6 h-1/2 justify-center">
      <View>
        <FormInput name="account" placeholder="Username..." color="#d1d5db" />
      </View>
      <View>
        <FormInput
          name="key"
          placeholder="Password..."
          color="#d1d5db"
          isPassword={true}
        />
        <View className="flex flex-row w-full justify-center gap-x-1.5 items-center pt-2 mt-4">
          <Text className="text-md text-gray-300 font-bold">Don't have an account?</Text>
          <Text className="text-md text-primary font-bold" onPress={() => navigation.navigate("Register")}>Register</Text>
        </View>
      </View>
      <View className="flex p-2 mt-4 mx-4">
        <LinearGradient  className=" flex p-4 items-center justify-center rounded-full mt-2" colors={['#AD6FEB', '#CF9EFF']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <Pressable>
            <Text className="text-white font-bold text-lg text-center uppercase">
              Login
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default LoginForm;
