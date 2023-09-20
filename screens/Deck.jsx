import { ActivityIndicator, Text, View } from "react-native";
import React, { useState } from "react";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Decks/DeckList";
import CreateDeck from "../components/Decks/CreateDeck";
import ReactNativeModal from "react-native-modal";
import connect from "../utils/baseAxios";

import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function Decks() {
  const [decks, setDecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [token] = useAuth();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSetModalVisible = () => {
    setModalVisible(true);
  };

  const handleSetModalHidden = () => {
    setModalVisible(false);
  };

  const getDeckList = async () => {
    await connect
      .get("http://192.168.0.12:8080/api/v1/decks/all", {
        headers: {
          Authorization: token.auth,
        },
      })
      .then((res) => {
        setDecks(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getDeckList();
  }, []);

  return (
    <SafeAreaView>
      <MainHeader />
      <View className="flex bg-white w-full h-full">
        <DeckHeader handleSetModalVisible={handleSetModalVisible} />
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#AD6FEB" />
          </View>
        ) : (
          <DeckList decks={decks} />
        )}

        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <CreateDeck closeModal={handleSetModalHidden} deck={decks[0]} setDecks={setDecks}/>
        </ReactNativeModal>
      </View>
    </SafeAreaView>
  );
}
