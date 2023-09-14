import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    retrieveUser();
  }, [])

  const setUserIdentity = async (newUserId) => {
    try {
        if (newUserId) {
            await AsyncStorage.setItem("userId", newUserId);
        } else {
            await AsyncStorage.removeItem("userId");
        }
        setUserId(newUserId);
    } catch (error) {
        console.log("Erro ao salvar o usuários: ", error);
    }
  }

  const retrieveUser = async () => {
    try {
        const storedUserId = await AsyncStorage.getItem("userId");
        setUserId(storedUserId);
    } catch (error) {
        console.log("Erro ao recuperar o usuário: ", error);
    }
  }

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
        {children}
    </UserContext.Provider>
  );
};

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser deve ser usado dentro de um AuthProvider");
    }
    return context;
}

export default UserProvider;