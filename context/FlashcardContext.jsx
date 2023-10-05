import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import baseURL from "../utils/baseURL";

const FlashcardContext = createContext();

export const useFlashcard = () => {
  return useContext(FlashcardContext);
};

export const FlashcardProvider = ({ children }) => {
  const { token } = useAuth();
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFlashcards = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseURL.flashcards.getAll, {
        headers: {
          Authorization: token.auth,
        },
      });
      setIsLoading(false);
      setFlashcards(response.data);
    } catch (error) {
      console.log("Error getting the flashcards: ", error);
    }
  };

  const createFlashcard = async (flashcard) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseURL.flashcards.create,
        {
          question: flashcard.question,
          answer: flashcard.answer,
          deckId: flashcard.subjectId,
          tagId: flashcard.tagId,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      setFlashcards((prev) => [...prev, response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating the flashcard: ", error);
    }
  };

  const deleteFlashcard = async (flashcardId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        baseURL.flashcards.baseFlashcards + `${flashcardId}`,
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      if (response !== undefined) {
        const filteredFlashcards = flashcards.filter(flashcard => flashcard.id !== response.data.id);
        setFlashcards(filteredFlashcards)
      }
      setIsLoading(false)
    } catch (error) {
      console.log("Error deleting the flashcard: ", error);
    }
  };

  useEffect(() => {
    if (token.auth !== null) {
        getFlashcards();
    }
  }, [token.auth, token.refreshed])

  return (
    <FlashcardContext.Provider
        value={{
            flashcards,
            setFlashcards,
            getFlashcards,
            createFlashcard,
            deleteFlashcard,
            isLoading,
        }}
    >
        {children}
    </FlashcardContext.Provider>
  )
};
