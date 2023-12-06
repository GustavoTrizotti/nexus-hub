import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Toast } from "react-native-toast-notifications";
import baseURL from "../utils/baseURL";
import { useAuth } from "./AuthContext";

const FlashcardContext = createContext();

export const useFlashcards = () => {
  return useContext(FlashcardContext);
};

export const FlashcardProvider = ({ children }) => {
  const { token } = useAuth() || null;
  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFlashcardsByDeckId = async (deckId) => {
    setIsLoading(true);
    try {
      const response = await axios
        .get(baseURL.flashcards.baseFlashcards + `/${deckId}/all`, {
          headers: {
            Authorization: token.auth,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            return res.data.filter((response) => response.deckId === deckId);
          } else {
            return [];
          }
        })
        .catch((err) => {
          setError(err);
          return false;
        })
        .finally(() => setIsLoading(false));

      return response;
    } catch (error) {
      console.log("Error getting flashcards by deck id: ", error);
      setError("Error getting flashcards by deck id: ");
    }
  };

  const getRevisionFlashcardsByDeckId = async (deckId) => {
    try {
      setIsLoading(true);
      const response = await getFlashcardsByDeckId(deckId);
      const revisionFlashcards = response.filter((flashcard) => {
        if (new Date(flashcard.nextRevisionDate) <= new Date()) {
          return flashcard;
        }
      });
      setFlashcards(revisionFlashcards)
      setIsLoading(false)
    } catch (error) {
      console.error("Erro ao visualizar os flashcards de revisão: ", error);
      setError("Erro ao visualizar os flashcards de revisão.");
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
            return res.data;
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
      setError(error.message);
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
          setError(err);
          return false;
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("Error deleting the flashcard: ", error);
      setError(error.message);
    }
  };

  const submitFlashcard = async (id, response) => {
    setIsLoading(true);
    try {
      const res = await axios
        .patch(
          baseURL.flashcards.baseFlashcards + `/${id}`,
          { response: response },
          {
            headers: {
              Authorization: token.auth,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            return true;
          }
          return false;
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));

      return res || false;
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      const { message } = error || null;
      Toast.show(message || error);
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
        getRevisionFlashcardsByDeckId,
        createFlashcard,
        deleteFlashcard,
        submitFlashcard,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};
