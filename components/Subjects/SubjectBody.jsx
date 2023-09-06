import { View, Text } from "react-native";
import React from "react";
import SubjectCard from "./SubjectCard";

const SubjectBody = ({ subjects, view }) => {
  return (
    <View>
      {view ? (
        <View className="flex items-center justify-center mb-6">
          {subjects.map((subject) => {
            return <SubjectCard key={subject.id} subject={subject} />;
          })}
        </View>
      ) : (
        <View className="flex items-center justify-center mb-6">
          {subjects.map((subject) => {
            return <SubjectCard key={subject.id} subject={subject} />;
          })}
        </View>
      )}
    </View>
  );
};

export default SubjectBody;
