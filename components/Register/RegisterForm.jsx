import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../Login/FormInput";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, isLoading } = useAuth();

  const navigation = useNavigation();

  const handleRegister = (name, username, password) => {

  }

  return (
    <View className="flex w-full m-4 h-auto justify-center">
      <View>
        <FormInput
          name="format-text"
          placeholder="Name..."
          color="#FFF"
          textColor="#FFF"
          changeText={setName}
          text={name}
        />
      </View>
      <View>
        <FormInput
          name="account"
          placeholder="Username..."
          color="#FFF"
          textColor="#FFF"
          changeText={setUsername}
          text={username}
        />
      </View>
      <View>
        <FormInput
          name="key"
          placeholder="Password..."
          color="#FFF"
          textColor="#FFF"
          isPassword={true}
          changeText={setPassword}
          text={password}
        />
        <View className="flex flex-row w-full justify-center gap-x-1.5 items-center pt-2 mt-4">
          <Text className="text-md text-white">Already has an account?</Text>
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
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Text className="text-primary font-bold text-lg text-center uppercase">
              Login
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterForm;
