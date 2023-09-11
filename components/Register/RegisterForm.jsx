import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../Login/FormInput";
import { LinearGradient } from "expo-linear-gradient";

const RegisterForm = () => {
  const navigation = useNavigation();

  return (
    <View className="flex w-full m-4 h-auto justify-center">
      <View>
        <FormInput name="format-text" placeholder="Name..." color="#FFF" />
      </View>
      <View>
        <FormInput name="account" placeholder="Username..." color="#FFF" />
      </View>
      <View>
        <FormInput
          name="key"
          placeholder="Password..."
          color="#FFF"
          isPassword={true}
        />
        <View className="flex flex-row w-full justify-center gap-x-1.5 items-center pt-2 mt-4">
          <Text className="text-md text-white">
            Already has an account?
          </Text>
          <Text
            className="text-md text-white font-bold"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
      <View className="flex p-2 mt-4 mx-4">
        <Pressable className="bg-white flex p-4 items-center justify-center rounded-full mt-2">
          <Text className="text-primary font-bold text-lg text-center uppercase">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterForm;
