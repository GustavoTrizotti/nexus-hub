import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Subjects from "./screens/Subjects";
import Cycle from "./screens/Cycle";
import Flashcards from "./screens/Flashcards";
import Sessions from "./screens/Sessions";

import CustomTabBar from "./navigation/CustomTabBar";

export default function App() {
  const Tab = createBottomTabNavigator();

  const SCREEN_NAMES = {
    HOME: "HOME",
    SUBJECTS: "SUBJECTS",
    CYCLE: "CYCLE",
    CARDS: "CARDS",
    SESSIONS: "SESSIONS",
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTintColor: "#AD6FEB",
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name={SCREEN_NAMES.HOME} component={Home} />
        <Tab.Screen name={SCREEN_NAMES.SUBJECTS} component={Subjects} />
        <Tab.Screen name={SCREEN_NAMES.CYCLE} component={Cycle} />
        <Tab.Screen name={SCREEN_NAMES.CARDS} component={Flashcards} />
        <Tab.Screen name={SCREEN_NAMES.SESSIONS} component={Sessions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
