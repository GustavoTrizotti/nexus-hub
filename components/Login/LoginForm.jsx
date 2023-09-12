import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useToast } from "react-native-toast-notifications";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const url = `http://192.168.0.12:8080/login`;

  const toast = useToast();

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
          <Pressable
            onPress={() =>
              axios
                .post(url, {
                  username: username,
                  password: password,
                })
                .then((res) =>
                  navigation.navigate("Tab", {
                    userId: res.data,
                    authorization: res.headers.authorization,
                    message: true,
                  })
                )
                .catch((e) => toast.show("Login failed!", {type: "danger", dangerColor: "#FFA0A0"}))
            }
          >
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
