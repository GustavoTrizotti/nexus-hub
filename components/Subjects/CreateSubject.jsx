import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSubjects } from "../../context/SubjectContext";
import { scheme } from "../../utils/colorSchema";
import MainHeader from "../MainHeader";
import KeyboardAvoidWrapper from "../utils/KeyboardAvoidWrapper";

const CreateSubject = () => {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [color, setColor] = useState("");

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
      <View className="flex h-full">
        <MainHeader title="SUBJECTS" />
        <View className="flex flex-1">
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
            </View>
          </View>
          <View>
            <SubjectColor />
          </View>
          <View className="flex justify-center items-center p-4 my-4">
            <Pressable
              className="p-4 bg-primary rounded-md w-full justify-center items-center flex"
              onPress={() => {
                handleCreateSubject({
                  name: name,
                  difficulty: difficulty,
                  color: color,
                });
                if (!isLoading) {
                  navigation.goBack();
                }
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="#FFF" />
              ) : (
                <Text className="text-lg text-white w-full font-bold px-4 text-center uppercase">
                  Save Changes
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
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

const SubjectColor = () => {
  const [checkedColors, setCheckedColors] = useState([]);

  useEffect(() => {
    Object.values(scheme).map((color) => {
      setCheckedColors((prev) => [...prev, { col: color, checked: false }]);
    });
  }, []);

  const handleChangeColor = (index) => {
    const newCheckedColors = [...checkedColors];
    for (let i = 0; i < newCheckedColors.length; i++) {
      newCheckedColors[i].checked = false;
    }
    newCheckedColors[index].checked = true;
    setCheckedColors(newCheckedColors);
  };

  return (
    <View className="flex flex-row w-full justify-center items-center">
      {checkedColors.map((color, index) => {
        return (
          <SubjectColorOption
            color={color.col}
            /* handleCheck={handleChangeColor(index)} */
            selected={color.checked}
            key={index}
          />
        );
      })}
    </View>
  );
};

const SubjectColorOption = ({ color, handleCheck, selected }) => {
  if (!selected) {
    return (
      <Icon
        name="circle-outline"
        size={48}
        color={color}
        onPress={() => handleCheck()}
      />
    );
  } else {
    return (
      <Icon
        name="circle-slice-8"
        size={48}
        color={color}
        onPress={() => handleCheck()}
      />
    );
  }
};

export default CreateSubject;
