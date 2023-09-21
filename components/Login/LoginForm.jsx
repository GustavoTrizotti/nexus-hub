import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [username, setUsername] = useState("arthur");
  const [password, setPassword] = useState("admin");
  
  const navigation = useNavigation();

  const { login, isLoading } = useAuth();

  const handleLogin = () => {
    login(username, password)
  };

  return (
    <View className="flex w-full m-4 gap-y-6 h-1/2 justify-center">
      <View>
        <FormInput
          name="account"
          placeholder="Username..."
          color="#d1d5db"
          text={username}
          textColor="#2d2d2d"
          changeText={setUsername}
        />
      </View>
      <View>
        <FormInput
          name="key"
          placeholder="Password..."
          color="#d1d5db"
          text={password}
          textColor="#2d2d2d"
          isPassword={true}
          changeText={setPassword}
        />
        <View className="flex flex-row w-full justify-center gap-x-1.5 items-center pt-2 mt-4">
          <Text className="text-md text-gray-300 font-bold">
            Don't have an account?
          </Text>
          <Text
            className="text-md text-primary font-bold"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </View>
      </View>
      <View className="flex p-2 mt-4 mx-4">
        <LinearGradient
          className=" flex p-4 items-center justify-center rounded-full mt-2"
          colors={["#AD6FEB", "#CF9EFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Pressable onPress={() => handleLogin()}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Text className="text-white font-bold text-lg text-center uppercase">
                Login
              </Text>
            )}
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default LoginForm;
