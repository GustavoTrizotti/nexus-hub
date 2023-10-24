import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";
import baseURL from "../utils/baseURL";

const DeckContext = createContext();

export const useDeck = () => {
  return useContext(DeckContext);
};

export const DeckProvider = ({ children }) => {
  const { token } = useAuth();
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDecks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(baseURL.decks.getAll, {
        headers: {
          Authorization: token.auth,
        },
      });
      setIsLoading(false);
      setDecks(response.data);
    } catch (error) {
      console.log("Error getting the decks: ", error);
    }
  };

  const createDeck = async (deck) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseURL.decks.create,
        {
          name: deck.name,
          subjectId: deck.subjectId,
          parentDeckId: deck.parentDeckId,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      setDecks((prev) => [...prev, response.data]);
      setIsLoading(false);
    } catch (error) {
      console.log("Error creating the decks: ", error);
    }
  };

  const deleteDeck = async (deckId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        baseURL.decks.baseDecks + `/${deckId}`,
        {
          headers: {
            Authorization: token.auth,
          },
        }
      );
      if (response !== undefined) {
        const filteredDecks = decks.filter(
          (deck) => deck.id !== response.data.id
        );
        setDecks(filteredDecks);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error deleting the deck: ", error);
    }
  };

  const updateDeck = async (deck) => {
    setIsLoading(true);
    try {
      const response = await axios.put(
        baseURL.decks.baseDecks + `/${deck.id}`,
        {
          name: deck.name,
          subjectId: deck.subjectId,
          parentDeckId: deck.parentDeckId,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      )

      if (response) {
        getDecks();
        setIsLoading(false);
        return response.data
      } else {
        console.log("No content provided to update the deck.");
      }
    } catch (error) {
      console.log("Error updating the deck: ", deck);
    }
  }

  useEffect(() => {
    if (token.auth !== null) {
      getDecks();
    }
  }, [token.auth, token.refreshed]);

  return (
    <DeckContext.Provider
      value={{
        decks,
        setDecks,
        createDeck,
        getDecks,
        deleteDeck,
        updateDeck,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
