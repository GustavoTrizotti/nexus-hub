import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SubjectHeader from "../components/Subjects/SubjectHeader";
import SubjectBody from "../components/Subjects/SubjectBody";
import { useSubjects } from "../context/SubjectContext";
import { useRef } from "react";

const Subjects = () => {
  const { subjects, getSubjects } = useSubjects();
  const scrollRef = useRef(null);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex bg-white h-full w-full">
        <ScrollView ref={scrollRef}>
          <MainHeader />
          <SubjectHeader />
          <SubjectBody subjects={subjects} scrollRef={scrollRef} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Subjects;
