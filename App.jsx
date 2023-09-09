import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";
import TabNavigation from "./navigation/TabNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useState } from "react";
import useAxios from "./hooks/useAxios";

export default function App() {
  const Stack = createNativeStackNavigator();

  /* const [data, setData] = useState(null);
  const [res, err, loading] = useAxios({
    url: '/subjects/all',
    method: 'get',
    headers: {
      
    }
  })
 */
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tab" component={TabNavigation} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
