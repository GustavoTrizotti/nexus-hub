import { useContext } from "react";
import { createContext, useState } from "react";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => {
  const [token, setToken] = useContext(AuthContext);
  return [token, setToken];
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ refreshed: false });
  const { getItem } = useAsyncStorage("token");

  const refresh = async () => {
    const data = await getItem();
    const decodedToken = jwtDecode(data);
    console.log("Decoded Token: ", decodedToken);
    const currentDate = new Date();

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      setState({auth: null, refreshed: true})
    } else {
      setState((prev) => ({
        ...data,
        ...prev,
        refreshed: true,
      }));
    }
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
