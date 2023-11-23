import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./TabRouter";
import Login from "../screens/Login";
import Register from "../screens/Register";

import { useAuth } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useToast } from "react-native-toast-notifications";

const AuthRouter = () => {
  const Stack = createNativeStackNavigator();
  const { token } = useAuth();
  const { auth } = token || null;
  const toast = useToast();
  const exp = auth === null ? null : jwtDecode(token.auth);
  const isExpired = exp !== null ? exp * 1000 < new Date().getTime() : false;

  useEffect(() => {
    if (isExpired) {
      console.log("Token expirou!");
      toast.show("Token expirou!", {
        type: "danger",
      });
    }
  }, [isExpired]);

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
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRouter;
