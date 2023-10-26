import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const refresh = (delayTime) => {
    setTimeout(() => {
      setIsLoading(false);
    }, delayTime);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        refresh,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
