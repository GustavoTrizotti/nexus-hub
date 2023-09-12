import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Cycle from "../screens/Cycle";
import Subjects from "../navigation/SubjectNavigation";
import Deck from "../screens/Deck";
import Sessions from "../screens/Sessions";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="DrawerHome" component={Home} />
        <Drawer.Screen name="DrawerCycle" component={Cycle} />
        <Drawer.Screen name="DrawerSubjects" component={Subjects} />
        <Drawer.Screen name="DrawerDeck" component={Deck} />
        <Drawer.Screen name="DrawerSessions" component={Sessions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
