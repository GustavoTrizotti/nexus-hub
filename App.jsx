import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./screens/Home";
import Subjects from "./screens/Subjects";
import Cycle from "./screens/Cycle";
import Flashcards from "./screens/Flashcards";
import Sessions from "./screens/Sessions";

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
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#AD6FEB",
          tabBarInactiveTintColor: "#AD6FEB",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingBottom: 16,
          },
          tabBarIcon: ({ color, focused }) => {
            let iconName;

            switch (route.name) {
              case SCREEN_NAMES.HOME:
                iconName = focused ? "home" : "home-outline";
                break;
              case SCREEN_NAMES.SUBJECTS:
                iconName = focused ? "book" : "book-outline";
                break;
              case SCREEN_NAMES.CYCLE:
                iconName = focused ? "clock" : "clock-outline";
                break;
              case SCREEN_NAMES.CARDS:
                iconName = focused ? "cards" : "cards-outline";
                break;
              case SCREEN_NAMES.SESSIONS:
                iconName = focused ? "timer" : "timer-outline";
                break;
              default:
                iconName = "home";
                break;
            }

            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
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
