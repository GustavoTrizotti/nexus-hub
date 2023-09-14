import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import AuthProvider from "./context/AuthContext";
import { ToastProvider } from "react-native-toast-notifications";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </AuthProvider>
  );
}
