import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    retrieveToken();
  }, [])

  const setAuthToken = async (newToken) => {
    try {
        if (newToken) {
            await AsyncStorage.setItem("authToken", newToken);
        } else {
            await AsyncStorage.removeItem("authToken");
        }
        setToken(newToken);
    } catch (error) {
        console.log("Erro ao salvar o token: ", error);
    }
  }

  const retrieveToken = async () => {
    try {
        const storedToken = await AsyncStorage.getItem("authToken");
        setToken(storedToken);
    } catch (error) {
        console.log("Erro ao recuperar o token: ", error);
    }
  }

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
        {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}

export default AuthProvider;