import { View, Text, TextInput, ScrollView, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import MainHeader from "../MainHeader";
import KeyboardAvoidWrapper from "../utils/KeyboardAvoidWrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CreateDifficulty from "./CreateDifficulty";
import SubjectColor from "./SubjectColor";
import { useState } from "react";
import { useSubjects } from "../../context/SubjectContext";

const CreateSubject = () => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [color, setColor] = useState("#AD6FEB");

  const { createSubject, isLoading } = useSubjects();

  const handleCreateSubject = (subject) => {
    console.log(subject);
    try {
      createSubject(subject);
    } catch (error) {
      console.log("Error handling the subject creation: ", error);
    }
   
  };

  return (
    <KeyboardAvoidWrapper bgColor="#FFF">
      <ScrollView>
        <MainHeader title="SUBJECTS" />
        <View className="flex h-full">
          <View className="flex items-center justify-center flex-row">
            <Icon name="book-plus-multiple" size={24} color="#AD6FEB" />
            <Text className="p-4 text-lg text-primary font-bold uppercase text-center">
              Create Subjects
            </Text>
          </View>
          <View>
            <View className="flex p-4">
              <View className="p-2">
                <Text className="font-bold text-lg text-primary">
                  Subject Name
                </Text>
                <TextInput
                  placeholder="Subject name..."
                  className="flex border-b-2 border-gray-200 p-4 text-lg my-2"
                  onChangeText={(e) => setName(e)}
                />
              </View>
              <View className="p-2 mt-2">
                <Text className="font-bold text-lg text-primary">
                  Difficulty
                </Text>
                <CreateDifficulty
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                />
              </View>
              <View className="p-2 mt-2">
                <Text className="font-bold text-lg text-primary">Color</Text>
                <SubjectColor color={color} setColor={setColor} />
              </View>
              <View className="flex justify-center items-center p-4 my-4">
                <Pressable className="p-4 bg-primary rounded-md" onPress={() => {
                  handleCreateSubject({name: name, difficulty: difficulty, color: color})
                }}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#FFF" />
                  ) : (
                    <Text className="text-lg text-white font-bold px-4">
                      Save Changes
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidWrapper>
  );
};

export default CreateSubject;
