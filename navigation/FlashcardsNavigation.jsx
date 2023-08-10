import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Flashcards from "../screens/Deck";
import Card from '../screens/FlashcardScreen/Card';

const FlaschardsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Flashcards"
        screenOptions={{ 
          headerShown: false,
        }}
      >
        <Stack.Screen name="Flashcards" component={Flashcards} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FlaschardsNavigation;
