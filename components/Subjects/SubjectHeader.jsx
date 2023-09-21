import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SearchInput from "../utils/SearchInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SubjectHeader = ({view, setView}) => {
  const navigation = useNavigation()

  return (
    <View className="flex p-4 mx-2 justify-center items-center">
      <View className="flex flex-row items-center justify-center p-2 m-2 mb-6 rounded-lg">
        <SearchInput color={"#AD6FEB"} placeholderInput={"Subject name..."}/>
      </View>
      <View className="flex p-4 mx-2 flex-row justify-center items-center gap-x-4">
        <Pressable className="bg-primary flex flex-1 items-center justify-center p-2 flex-row rounded-lg"
          onPress={() => navigation.navigate("CreateSubject")}
        >
          <Icon name="book" size={24} color={"#FFF"}/>
          <Text className="text-white font-bold text-lg text-center p-2 px-4">New Subject</Text>
        </Pressable>
        <View className="p-3 bg-primary flex justify-center rounded-md">
        {view ? <Icon name="view-grid" size={30} color={"#fff"} onPress={setView}/> : <Icon name="view-list" size={30} color={"#fff"} onPress={setView}/>}
        </View>
      </View>
    </View>
  );
};

export default SubjectHeader;
