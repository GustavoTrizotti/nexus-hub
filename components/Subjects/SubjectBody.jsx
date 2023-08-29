import { View, Text } from "react-native";
import React from "react";

import subject from "../../utils/dataSubjectObject";
import SubjectCard from "./SubjectCard";

const SubjectBody = () => {
  const subjects = subject.subjects;
  return (
    <View className="flex items-center justify-center mb-6">
      {subjects.map((subject) => {
        return <SubjectCard key={subject.id} subject={subject} />;
      })}
    </View>
  );
};

export default SubjectBody;
