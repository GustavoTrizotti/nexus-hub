import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";

const DeckContext = createContext();

export const useDeck = () => {
  return useContext(DeckContext);
};

export const DeckProvider = ({ children }) => {
  const [token] = useAuth();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const createDeck = async (newDeck) => {
    await axios
      .post(
        "http://192.168.0.12:8080/api/v1/decks/save",
        {
          name: newDeck.name,
          subjectId: newDeck.subjectId,
          parentDeckId: newDeck.parentDeckId,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        setData([...data, res.data]);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const getDecks = async () => {
    console.log(token);
    await axios
      .get("http://192.168.0.12:8080/api/v1/decks/all", {
        headers: {
          Authorization: token.auth,
        },
      })
      .then((res) => {
        console.log("GetDecks Data:", res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const updateDeck = async (deck) => {
    await axios
      .put(
        `http://192.168.0.12:8080/api/v1/decks/${deckId}`,
        {
          id: deck.id,
          name: deck.name,
          subjectId: deck.subjectName,
          parentDeckId: deck.parentDeckId,
        },
        {
          headers: {
            Authorization: token.auth,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const deleteDeck = async (deckId) => {
    await axios
      .delete(`http://192.168.0.12:8080/api/v1/decks/${deckId}`, {
        data: {
          id: deckId,
        },
        headers: {
          Authorization: token.auth,
        },
      })
      .then((res) => {
        setData(filteredDecks);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.response.data);
        setIsLoading(false);
      });
  };

  const refresh = async () => {
    try {
      getDecks();
    } catch (error) {
      console.log(error.headers);
    }
  };

  useEffect(() => {
    if (token.auth !== null) {
      refresh();
    }
  }, [token.auth]);

  return (
    <DeckContext.Provider
      value={{
        data,
        isLoading,
        createDeck,
        getDecks,
        updateDeck,
        deleteDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
