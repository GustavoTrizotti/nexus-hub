import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Subjects from "../screens/Subjects";
import CreateSubject from "../components/Subjects/CreateSubject";
import SubjectTodo from "../components/Subjects/SubjectTodo";
const Stack = createNativeStackNavigator();

const SubjectNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Subjects"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="SubjectTodo" component={SubjectTodo} />
        <Stack.Screen name="CreateSubject" component={CreateSubject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SubjectNavigation;
