import { useContext } from "react";
import { createContext, useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  const [token, setToken, storeToken] = useContext(AuthContext);
  return [token, setToken, storeToken];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ auth: null, refreshed: false });
  const { setItem, removeItem, getItem } = useAsyncStorage("token");

  const storeToken = async (token) => {
    try {
      await setItem(token);
    } catch (error) {
      console.log("Error storing token: ", token);
    }
  };

  const removeToken = async () => {
    try {
      await removeItem();
    } catch (error) {
      console.log("Error removing token: ", token);
    }
  };

  const refresh = async () => {
    try {
      const data = await getItem();
      if (data.auth === null) {
        const decodedToken = jwtDecode(data);
        const currentDate = new Date();
        decodedToken.exp * 1000 < currentDate.getTime()
          ? (removeToken(), setState({ auth: null, refreshed: true }))
          : setState({ auth: data, refreshed: true });
      } else {
        setState({auth: null, refreshed: true})
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState, storeToken]}>
      {children}
    </AuthContext.Provider>
  );
};
