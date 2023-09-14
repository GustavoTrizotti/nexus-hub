import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import AuthProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastProvider } from "react-native-toast-notifications";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>
      <Provider store={store}>
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
      </Provider>
    </AuthProvider>
  );
}
