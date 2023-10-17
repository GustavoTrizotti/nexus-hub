import React, { useCallback } from "react";
import { View } from "react-native";
import { useSubjects } from "../../context/SubjectContext";
import SubjectCard from "./SubjectCard";
import { useNavigation } from "@react-navigation/native";

const SubjectBody = ({ subjects, scrollRef }) => {
  const { deleteSubject, setSubjects, isLoading } = useSubjects();
  const navigation = useNavigation();

  const onDissmissDelete = useCallback((subjectId) => {
    deleteSubject(subjectId)
  }, []);

  const onDissmissUpdate = useCallback((subject) => {
    navigation.navigate("CreateSubject", {updateSubject: subject})
  })

  return (
    <View className="flex px-4 mx-6">
      <View className="flex items-center justify-center mb-6 w-full">
        {subjects.map((subject) => {
          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              scrollRef={scrollRef}
              onDissmiss={[onDissmissDelete, () => onDissmissUpdate(subject)]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SubjectBody;
