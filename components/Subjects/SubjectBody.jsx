import React, { useCallback } from "react";
import { View } from "react-native";
import { useSubjects } from "../../context/SubjectContext";
import SubjectCard from "./SubjectCard";

const SubjectBody = ({ subjects, scrollRef }) => {
  const { deleteSubject, setSubjects, isLoading } = useSubjects();

  const onDissmiss = useCallback((subjectId) => {
    deleteSubject(subjectId)
  }, []);

  return (
    <View className="flex px-4 mx-6">
      <View className="flex items-center justify-center mb-6 w-full">
        {subjects.map((subject) => {
          return (
            <SubjectCard
              key={subject.id}
              subject={subject}
              scrollRef={scrollRef}
              onDissmiss={onDissmiss}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SubjectBody;
