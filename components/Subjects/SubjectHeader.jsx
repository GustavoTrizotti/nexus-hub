import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchInput from "../utils/SearchInput";

const SubjectHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="flex p-6 mx-2 justify-center items-center">
      <View className="flex flex-row items-center justify-center mb-6 rounded-lg">
        <SearchInput color={"#c2c2c2"} placeholderInput={"Subject name..."} />
      </View>
      <View className="flex mx-2 my-4 flex-row justify-center items-center gap-x-4">
        <Pressable
          className="bg-primary flex flex-1 items-center justify-center p-2 flex-row rounded-lg"
          onPress={() => navigation.navigate("CreateSubject")}
        >
          <Icon name="book" size={24} color={"#FFF"} />
          <Text className="text-white font-bold text-lg text-center p-2 px-4">
            New Subject
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubjectHeader;
