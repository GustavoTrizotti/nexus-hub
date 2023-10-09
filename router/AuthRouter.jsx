import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./TabRouter";
import Login from "../screens/Login";
import Register from "../screens/Register"

import { useAuth } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

const AuthRouter = () => {
  const Stack = createNativeStackNavigator();
  const { token } = useAuth();

  if (!token.refreshed) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token.auth ? (
          <Stack.Screen name="Tab" component={TabNavigation} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRouter;
