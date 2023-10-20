import React, { useCallback } from "react";
import { View } from "react-native";
import { useSubjects } from "../../context/SubjectContext";
import SubjectCard from "./SubjectCard";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import Animated, { FadeInUp, FadeOut } from "react-native-reanimated";
import { useToast } from "react-native-toast-notifications";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Pressable } from "react-native";

const SubjectBody = ({ scrollRef }) => {
  const { deleteSubject, getSubjects, subjects, isLoading } = useSubjects();
  const navigation = useNavigation();

  const toast = useToast();

  useEffect(() => {
    getSubjects();
  }, []);

  const onDissmissDelete = useCallback(
    (subjectId) => {
      deleteSubject(subjectId);
      toast.show("Subject removed successfully!", {
        type: "success",
        successColor: "#CF9EFF",
        swipeEnabled: true,
        placement: "top",
      });
    },
    [deleteSubject]
  );

  const onDissmissUpdate = useCallback((subject) => {
    navigation.navigate("CreateSubject", { updateSubject: subject });
  });

  return (
    <View className="flex px-4 mx-6">
      {isLoading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOut}
          className="flex items-center justify-center mb-6 w-full"
        >
          {subjects.map((subject) => {
            return (
              <SubjectCard
                key={subject.id}
                subject={subject}
                scrollRef={scrollRef}
                onDissmiss={[onDissmissDelete, () => onDissmissUpdate(subject)]}
              />
            );
          })}
        </Animated.View>
      )}
    </View>
  );
};

export default SubjectBody;
