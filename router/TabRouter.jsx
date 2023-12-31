import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Sessions from "../screens/Sessions";
import Flashcards from "./FlashcardRouter";
import Subjects from "./SubjectRouter";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const SCREEN_NAMES = {
    HOME: "HOME",
    SUBJECTS: "SUBJECTS",
    CARDS: "DECKS",
    SESSIONS: "SESSIONS",
  };

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        backBehavior="history"
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
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
        <Tab.Screen name={SCREEN_NAMES.CARDS} component={Flashcards} />
        <Tab.Screen name={SCREEN_NAMES.SESSIONS} component={Sessions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
