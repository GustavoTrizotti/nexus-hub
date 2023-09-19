import { useContext } from "react";
import { createContext, useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const [token, setToken] = useContext(AuthContext);
  return [token, setToken];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ refreshed: false });
  const { setItem, getItem } = useAsyncStorage("token");

  const refresh = async () => {
    const data = await getItem();
    setState(prev => ({
      ...(data && JSON.parse(data)),
      ...prev,
      refreshed: true,
    }));
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
