import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import baseURL from "../utils/baseURL";
import { useLoading } from "./LoadingContext";
import { useToast } from "react-native-toast-notifications";

const FlashcardContext = createContext();

export const useFlashcards = () => {
  return useContext(FlashcardContext);
};

export const FlashcardProvider = ({ children }) => {
  const { token } = useAuth() || null;
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  const toast = useToast();

  const getFlashcardsByDeckId = async (deckId) => {
    setIsLoading(true);
    try {
      await axios
        .get(baseURL.flashcards.baseFlashcards + `/${deckId}/all`, {
          headers: {
            Authorization: token.auth,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            setFlashcards(
              res.data.filter((response) => response.deckId === deckId)
            );
            console.log(flashcards);
            return true;
          }
          return false;
        })
        .catch((err) => {
          setError(err);
          return false;
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("Error getting flashcards by deck id: ", error);
    }
  };

  const createFlashcard = async (flashcard) => {
    setIsLoading(true);
    try {
      const response = await axios
        .post(
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
        )
        .then(async (res) => {
          if (res.data) {
            setFlashcards((prev) => [...prev, res.data]);
            await getFlashcardsByDeckId(flashcard.deckId);
            return true;
          }
          return false;
        })
        .catch((err) => {
          setError(err);
          return false;
        })
        .finally(() => setIsLoading(false));

        return response;
    } catch (error) {
      console.log("Error creating the flashcard: ", error);
    }
  };

  const deleteFlashcard = async (flashcardId) => {
    setIsLoading(true);
    try {
      await axios
        .delete(baseURL.flashcards.baseFlashcards + `${flashcardId}`, {
          headers: {
            Authorization: token.auth,
          },
        })
        .then((res) => {
          if (res.data) {
            setFlashcards(
              flashcards.filter(
                (flashcard) => flashcard.id !== response.data.id
              )
            );
            return true;
          }
          return false;
        })
        .catch((err) => {
          setError(err)
          return false;
        })
        .finally(() => setIsLoading(false))
    } catch (error) {
      console.log("Error deleting the flashcard: ", error);
    }
  };

  useEffect(() => {
    if (error != null) {
      toast.show(error);
    }
  }, [error]);

  return (
    <FlashcardContext.Provider
      value={{
        error,
        setError,
        flashcards,
        setFlashcards,
        getFlashcardsByDeckId,
        createFlashcard,
        deleteFlashcard,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};
