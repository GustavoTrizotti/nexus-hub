import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/MainHeader";
import SubjectBody from "../components/Subjects/SubjectBody";
import SubjectHeader from "../components/Subjects/SubjectHeader";
import { useSubjects } from "../context/SubjectContext";

const Subjects = () => {
  const scrollRef = useRef(null);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="flex bg-white h-full w-full">
        <ScrollView ref={scrollRef}>
          <MainHeader />
          <SubjectHeader/>
          <SubjectBody scrollRef={scrollRef} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Subjects;
