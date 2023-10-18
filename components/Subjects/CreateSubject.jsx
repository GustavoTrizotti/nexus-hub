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

const CreateSubject = ({ route }) => {
  const subjectUpdate = route.params ? route.params.updateSubject : null;
  const isUpdate = subjectUpdate ? true : false;
  const [name, setName] = useState(isUpdate ? subjectUpdate.name : "");
  const [difficulty, setDifficulty] = useState(
    isUpdate ? subjectUpdate.difficulty : 1
  );
  const [color, setColor] = useState(
    isUpdate ? subjectUpdate.color : "#AD6FEB"
  );


  const { createSubject, isLoading, updateSubject } = useSubjects();

  const navigation = useNavigation();

  const handleCreateSubject = (subject) => {
    try {
      createSubject(subject);
    } catch (error) {
      console.log("Error handling the subject creation: ", error);
    }
  };

  const handleUpdateSubject = (subject) => {
    try {
      updateSubject(subject);
    } catch (error) {
      console.log("Error handling the subject update: ", error);
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
              {isUpdate ? "Edit Subjects" : "Create Subjects"}
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
                  value={name}
                />
              </View>
              <View className="p-2 mt-2">
                <Text className="font-bold text-lg text-primary">
                  Difficulty
                </Text>
                <CreateDifficulty
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  subjectUpdate={subjectUpdate}
                />
              </View>
            </View>
          </View>
          <View>
            <SubjectColor setColor={setColor} subjectUpdate={subjectUpdate} />
          </View>
          <View className="flex justify-center items-center p-4 my-4">
            <Pressable
              className="p-4 bg-primary rounded-md w-full justify-center items-center flex"
              onPress={() => {
                const subject = {
                  name: name,
                  difficulty: difficulty,
                  color: color,
                };
                console.log(subject);
                if (isUpdate) {
                  handleUpdateSubject({
                    id: subjectUpdate.id,
                    name: name,
                    difficulty: difficulty,
                    color: color,
                  });
                } else {
                  handleCreateSubject(subject);
                }

                if (!isLoading) {
                  navigation.goBack();
                }
              }}
              Subject
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

export const CreateDifficulty = ({
  difficulty,
  setDifficulty,
  subjectUpdate,
}) => {
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

  useEffect(() => {
    if (subjectUpdate) {
      setDifficulty(subjectUpdate.difficulty);
      handleCheckboxChange(subjectUpdate.difficulty - 1);
    }
  }, []);

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

const SubjectColor = ({ setColor, subjectUpdate }) => {
  const [colors, setColors] = useState(
    colors === undefined
      ? Object.values(scheme).map((color) => ({ col: color, checked: false }))
      : []
  );

  useEffect(() => {
    if (subjectUpdate) {
      handleSelectUpdateColor(subjectUpdate.color);
    }
  }, []);

  const handleChangeColor = (index) => {
    const newColors = [...colors];
    if (newColors[index] != undefined) {
      for (let i = 0; i < newColors.length; i++) {
        newColors[i].checked = false;
      }
      newColors[index].checked = true;
      setColors(newColors);
      setColor(newColors[index].col);
    }
  };

  const handleSelectUpdateColor = (color) => {
    const newColors = colors.map((singleColor) => {
      console.log(singleColor.col);
      return singleColor.col === color
        ? { col: color, checked: true }
        : { col: singleColor.col, checked: false };
    });

    setColors(newColors);
  };

  return (
    <View className="flex flex-row w-full justify-center items-center">
      {colors.map((color, index) => {
        return (
          <SubjectColorOption
            color={color.col}
            selected={color.checked}
            key={index}
            handleCheck={() => handleChangeColor(index)}
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
