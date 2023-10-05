import { useContext } from "react";
import { createContext, useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

import baseURL from "../utils/baseURL";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({ auth: null, refreshed: false });
  const [isLoading, setIsLoading] = useState(false);
  const { setItem, removeItem, getItem } = useAsyncStorage("token");

  const logout = async () => {
    try {
      if (token.auth !== null) {
        setToken({ auth: null, refreshed: true });
        removeItem();
        await storeToken(JSON.stringify({ auth: null, refreshed: true }));
      } else {
        console.log("Token not found.");
      }
    } catch (error) {
      console.log("Error logging out the user: ", error);
    }
  };

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(baseURL.loginURL, {
        username: username,
        password: password,
      });
      setIsLoading(false);
      storeToken(
        JSON.stringify({
          auth: response.headers.authorization,
          refreshed: true,
        })
      );
      setToken({ auth: response.headers.authorization, refreshed: true });
    } catch (error) {
      console.log("Error loggin the user: ", error);
      setIsLoading(false);
    }
  };

  const register = async (name, username, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(baseURL.registerURL, {
        name: name,
        username: username,
        password: password,
      });
      setIsLoading(false);
      login(username, password);
    } catch (error) {
      console.log("Error registering the user: ", error);
      setIsLoading(false);
    }
  };

  const storeToken = async (token) => {
    try {
      await setItem(token);
    } catch (error) {
      console.log("Error storing token: ", token);
    }
  };

  const removeToken = async () => {
    try {
      await storeToken(JSON.stringify({ auth: null, refreshed: true }));
    } catch (error) {
      console.log("Error removing token: ", token);
    }
  };

  const refresh = async () => {
    try {
      const tokenData = await getItem();
      if (tokenData != null) {
        const data = JSON.parse(tokenData);
        if (data.auth !== null) {
          const decodedToken = jwtDecode(data.auth);
          const currentDate = new Date();
          decodedToken.exp * 1000 < currentDate.getTime()
            ? (removeToken(), setToken({ auth: null, refreshed: true }))
            : setToken({ auth: data.auth, refreshed: true });
        } else {
          setToken({ auth: null, refreshed: true });
        }
      } else {
        storeToken(JSON.stringify({ auth: null, refreshed: false }));
      }
    } catch (e) {
      console.log("Error refreshing the authorization token: ", e);
    }
  };

  const refreshToken = async () => {};

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        storeToken,
        login,
        logout,
        register,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
