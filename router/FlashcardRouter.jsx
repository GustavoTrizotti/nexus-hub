import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Deck from "../screens/Deck";
import Flashcard from '../screens/Flashcards/Flashcard';
import CreateCard from "../screens/Flashcards/CreateFlashcard"
import DeckOptions from "../screens/Flashcards/DeckOptions";

const FlaschardsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Decks"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Decks" component={Deck}/>
        <Stack.Screen name="Flashcard" component={Flashcard} />
        <Stack.Screen name="CreateCard" component={CreateCard} />
        <Stack.Screen name="Deck" component={DeckOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FlaschardsNavigation;
