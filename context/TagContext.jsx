import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { useLoading } from "./LoadingContext";
import axios from "axios";

const TagContext = createContext();

export const useTags = () => {
  return useContext(TagContext);
};

export const TagProvider = ({ children }) => {
  const { token } = useAuth();
  const [tags, setTags] = useState([]);
  const { isLoading, refresh } = useLoading();

  const getAllTags = async () => {
    try {
        const response = await axios.get(
            base
        )
    } catch (error) {
        
    }
  };
};
