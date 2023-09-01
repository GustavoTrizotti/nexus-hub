import { View, Text } from "react-native";
import React from "react";
import SubjectCard from "./SubjectCard";

const SubjectBody = ({ subjects }) => {
  return (
    <View className="flex items-center justify-center mb-6">
      {subjects.map((subject) => {
        return <SubjectCard key={subject.id} subject={subject} />;
      })}
    </View>
  );
};

export default SubjectBody;
