import axios from "axios";
import { createContext, useState } from "react";
import baseURL from "../utils/baseURL";
import { useAuth } from "./AuthContext";
import { useLoading } from "./LoadingContext";
import { useContext } from "react";

const TagContext = createContext();

export const useTags = () => {
  return useContext(TagContext);
};

export const TagProvider = ({ children }) => {
  const { token } = useAuth();
  const [tags, setTags] = useState([]);
  const { isLoading, setIsLoading } = useLoading();

  const getTags = async () => {
    try {
      const response = await axios.get(baseURL.tags.getAll, {
        headers: {
          Authorization: token.auth,
        },
      });
      setIsLoading(false);
      setTags(response.data);
      return response.data;
    } catch (error) {
      console.log("Error getting the tags: ", error);
    }
  };

  const createTag = async (tag) => {
    try {
      const response = await axios.post(
        baseURL.tags.create,
        {
          name: tag.name,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      setTags((prev) => [...prev, response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating the tag: ", error);
    }
  };

  return (
    <TagContext.Provider
      value={{
        tags,
        setTags,
        getTags,
        createTag,
      }}
    >
      {children}
    </TagContext.Provider>
  )
};
