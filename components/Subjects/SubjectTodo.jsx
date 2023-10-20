import React from "react";
import { Text } from "react-native";
import MainHeader from "../MainHeader";
import KeyboardAvoidWrapper from "../utils/KeyboardAvoidWrapper";

const SubjectTodo = ({ route }) => {
  const subject = route.params.subject;
  return (
    <KeyboardAvoidWrapper bgColor="#FFF">
      <MainHeader title={subject.name} />
      <Text>Texto</Text>
    </KeyboardAvoidWrapper>
  );
};

export default SubjectTodo;
