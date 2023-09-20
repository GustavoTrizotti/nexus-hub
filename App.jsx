import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthContext";
import AuthRouter from "./navigation/AuthRouter";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App" component={AuthRouter} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </AuthProvider>
  );
}
