import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import baseURL from "../utils/baseURL";

const FlashcardContext = createContext();

export const useFlashcards = () => {
  return useContext(FlashcardContext);
};

export const FlashcardProvider = ({ children }) => {
  const { token } = useAuth();
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFlashcardsByDeckId = async (deckId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseURL.flashcards.baseFlashcards + `/${deckId}/all`, {
        headers: {
          Authorization: token.auth,
        }
      })
      setIsLoading(false)
      setFlashcards(response.data)
    } catch (error) {
      console.log("Error getting flashcards by deck id: ", error);
    }
  }

  const createFlashcard = async (flashcard) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseURL.flashcards.create,
        {
          question: flashcard.question,
          answer: flashcard.answer,
          deckId: flashcard.deckId,
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
        const filteredFlashcards = flashcards.filter(
          (flashcard) => flashcard.id !== response.data.id
        );
        setFlashcards(filteredFlashcards);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error deleting the flashcard: ", error);
    }
  };

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        setFlashcards,
        getFlashcardsByDeckId,
        createFlashcard,
        deleteFlashcard,
        isLoading,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};
