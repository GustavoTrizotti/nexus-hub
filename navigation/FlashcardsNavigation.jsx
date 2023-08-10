import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Deck from "../screens/Deck";
import Card from '../screens/FlashcardScreen/Card';

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
        <Stack.Screen name="Decks" component={Deck} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FlaschardsNavigation;
