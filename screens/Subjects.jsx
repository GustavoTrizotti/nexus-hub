import { ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SubjectHeader from "../components/Subjects/SubjectHeader";
import SubjectBody from "../components/Subjects/SubjectBody";

const Subjects = () => {
  const [view, setView] = useState(false)
  const subjects = []

  const handleSetView = () => {
    setView(!view);
  }

  return (
    <SafeAreaView className="flex bg-white h-full w-full">
      <ScrollView>
        <MainHeader />
        <SubjectHeader setView={handleSetView} view={view}/>
        <SubjectBody subjects={subjects} view={view}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subjects;
