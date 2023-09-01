import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SubjectHeader from "../components/Subjects/SubjectHeader";
import SubjectBody from "../components/Subjects/SubjectBody";
import { useSelector } from "react-redux";

const Subjects = () => {
  const {subjects} = useSelector(rootReducer => rootReducer.subjectReducer)
  console.log(subjects);

  return (
    <SafeAreaView className="flex bg-white h-full w-full">
      <ScrollView>
        <MainHeader />
        <SubjectHeader />
        <SubjectBody/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subjects;
