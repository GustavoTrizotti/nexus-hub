import { View, Text } from "react-native";
import React from "react";
import SubjectCard from "./SubjectCard";
import { useCallback } from "react";
import { useSubjects } from "../../context/SubjectContext";

const SubjectBody = ({ subjects, scrollRef }) => {

  const { deleteSubject, isLoading } = useSubjects()

  const onDissmiss = useCallback((subjectId) => {
    deleteSubject(subjectId)
  }, [])

  return (
    <View className="flex p-4 mx-6">
      <View className="flex items-center justify-center mb-6 w-full">
        {subjects.map((subject) => {
          return <SubjectCard key={subject.id} subject={subject} scrollRef={scrollRef} onDissmiss={onDissmiss}/>;
        })}
      </View>
    </View>
  );
};

export default SubjectBody;
