import { useContext } from "react";
import { createContext, useState } from "react";

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

  const logout = async () => {
    try {
      if (token.auth !== null) {
        setToken({ auth: null, refreshed: true });
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

  const refresh = async () => {
    try {
      const tokenData = token.auth;
      if (tokenData != null) {
        const data = JSON.parse(tokenData);
        if (data.auth !== null) {
          const decodedToken = jwtDecode(data.auth);
          const currentDate = new Date();
          if (decodedToken.exp * 1000 < currentDate.getTime() + 60000) {
            await refreshToken();
          } else {
            setToken({ auth: data.auth, refreshed: true });
          }
        } else {
          setToken({ auth: null, refreshed: true });
        }
      } else {
        setToken({ auth: null, refreshed: true });
      }
    } catch (e) {
      console.log("Error refreshing the authorization token: ", e);
    }
  };

  const refreshToken = async () => {
    try {
      const refreshToken = token.auth;
      if (refreshToken) {
        const response = await axios.get(baseURL.refreshTokenURL, {
          headers: {
            Cookie: `refresh-token=${refreshToken}`,
          },
        });
        setToken({ auth: response.headers.authorization, refreshed: true });
        console.log("Token refreshed successfully!");
      } else {
        console.log("Refresh token not found.");
      }
    } catch (error) {
      console.log("Error refreshing token: ", error);
    }
  };

  useEffect(() => {
    if (token.refreshed == false) {
      refresh();
    } else {
      const refreshInterval = setInterval(() => {
        refresh();
      }, 60000);
      return () => clearInterval(refreshInterval);
    }
    
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
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
