import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthRouter from "./router/AuthRouter";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "react-native-toast-notifications";
import { DeckProvider } from "./context/DeckContext";
import { SubjectProvider } from "./context/SubjectContext";
import { FlashcardProvider } from "./context/FlashcardContext";
import { TagProvider } from "./context/TagContext";
import { LoadingProvider } from "./context/LoadingContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <LoadingProvider>
      <AuthProvider>
        <SubjectProvider>
          <TagProvider>
            <DeckProvider>
              <FlashcardProvider>
                <ToastProvider>
                  <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                      <Stack.Screen name="App" component={AuthRouter} />
                    </Stack.Navigator>
                  </NavigationContainer>
                </ToastProvider>
              </FlashcardProvider>
            </DeckProvider>
          </TagProvider>
        </SubjectProvider>
      </AuthProvider>
    </LoadingProvider>
  );
}
