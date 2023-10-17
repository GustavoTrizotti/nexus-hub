import axios from "axios";
import { createContext, useContext, useState } from "react";
import baseURL from "../utils/baseURL";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const SubjectContext = createContext();

export const useSubjects = () => {
  return useContext(SubjectContext);
};

export const SubjectProvider = ({ children }) => {
  const { token } = useAuth();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSubjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseURL.subjects.getAll, {
        headers: {
          Authorization: token.auth,
        },
      });
      setIsLoading(false);
      setSubjects(response.data);
    } catch (error) {
      console.log("Error getting the subjects: ", error);
    }
  };

  const createSubject = async (subject) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseURL.subjects.create,
        {
          name: subject.name,
          difficulty: subject.difficulty,
          color: subject.color,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      setSubjects((prev) => [...prev, response.data]);
      setIsLoading(false);
      return response.data
    } catch (error) {
      console.log("Error creating the subject: ", error);
    }
  };

  const deleteSubject = async (subjectId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        baseURL.subjects.baseSubjects + `/${subjectId}`,
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      if (response) {
        console.log("Subject List to Delete: ", subjects);
        const filteredSubjects = subjects.filter(
          (subject) => subject.id == response.data.id
        );
        console.log("Subjects filtradas para colocar na lista atual:", filteredSubjects);
        setSubjects(filteredSubjects);
      }
      setIsLoading(false);
      return response.data
    } catch (error) {
      console.log("Error deleting the subject: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token.auth !== null) {
      getSubjects();
    }
  }, [token.auth, token.refreshed]);

  return (
    <SubjectContext.Provider
      value={{
        subjects,
        setSubjects,
        getSubjects,
        createSubject,
        deleteSubject,
        isLoading,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};
