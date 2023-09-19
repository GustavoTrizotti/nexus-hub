import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Login from "../screens/Login"
import { useAuth } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen"

const AuthRouter = () => {
  const Stack = createNativeStackNavigator();
  const [{auth, refreshed}] = useAuth();
  console.log(auth, refreshed);

    if (!refreshed) {
        return <SplashScreen />
    }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRouter;
