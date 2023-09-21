import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/AuthContext";
import AuthRouter from "./navigation/AuthRouter";
import { ToastProvider } from "react-native-toast-notifications";
import { DeckProvider } from "./context/DeckContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AuthProvider>
      <DeckProvider>
        <ToastProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="App" component={AuthRouter} />
            </Stack.Navigator>
          </NavigationContainer>
        </ToastProvider>
      </DeckProvider>
    </AuthProvider>
  );
}
