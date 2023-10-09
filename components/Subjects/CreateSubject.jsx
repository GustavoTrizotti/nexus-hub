import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSubjects } from "../../context/SubjectContext";
import MainHeader from "../MainHeader";
import KeyboardAvoidWrapper from "../utils/KeyboardAvoidWrapper";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { scheme } from "../../utils/colorSchema";
import { useNavigation } from "@react-navigation/native";

const CreateSubject = () => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(
      Object.values(scheme)[
        Math.floor(Math.random() * Object.keys(scheme).length + 1)
      ]
    );
  }, []);

  const { createSubject, isLoading } = useSubjects();

  const navigation = useNavigation();

  const handleCreateSubject = (subject) => {
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
              <View className="flex justify-center items-center p-4 my-4">
                <Pressable
                  className="p-4 bg-primary rounded-md"
                  onPress={() => {
                    handleCreateSubject({
                      name: name,
                      difficulty: difficulty,
                      color: color,
                    });
                    navigation.goBack();
                  }}
                >
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

const DifficultyCheck = ({ checked, handleCheck }) => {
  return (
    <TouchableOpacity
      onPress={() => handleCheck()}
      className="flex mx-3"
      activeOpacity={0.2}
    >
      {checked ? (
        <Icon name="circle-slice-8" size={48} color="#AD6FEB" />
      ) : (
        <Icon name="circle-outline" size={48} color="#AD6FEB" />
      )}
    </TouchableOpacity>
  );
};

export const CreateDifficulty = ({ difficulty, setDifficulty }) => {
  const [checkBoxes, setCheckBoxes] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const diffs = {
    1: "Very Easy",
    2: "Easy",
    3: "Medium",
    4: "Hard",
    5: "Very Hard",
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkBoxes];
    if (newCheckboxes[index] !== false) {
      for (let i = index + 1; i < newCheckboxes.length; i++) {
        newCheckboxes[i] = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        newCheckboxes[i] = true;
      }
    }
    setCheckBoxes(newCheckboxes);
  };

  useEffect(() => {
    setDifficulty(checkBoxes.filter((check) => check === true).length);
  }, [checkBoxes]);

  return (
    <View className="w-full mt-2">
      <View className="p-4 flex flex-row justify-center">
        {checkBoxes.map((checked, index) => (
          <DifficultyCheck
            checked={checked}
            handleCheck={() => handleCheckboxChange(index)}
            key={index}
          />
        ))}
      </View>

      <View className="flex justify-center items-center">
        <Text className="pt-2 text-lg text-primary uppercase font-bold">
          {diffs[difficulty]}
        </Text>
      </View>
    </View>
  );
};

export default CreateSubject;
