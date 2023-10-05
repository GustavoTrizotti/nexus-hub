import { ActivityIndicator, Text, View } from "react-native";
import React, { useState } from "react";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Decks/DeckList";
import CreateDeck from "../components/Decks/CreateDeck";
import ReactNativeModal from "react-native-modal";

import { useDeck } from "../context/DeckContext";

export default function Decks() {
  const { decks, setDecks, isLoading } = useDeck();
  console.log(decks);

  const [modalVisible, setModalVisible] = useState(false);

  const handleSetModalVisible = () => {
    setModalVisible(true);
  };

  const handleSetModalHidden = () => {
    setModalVisible(false);
  };

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
          <DeckList decks={decks} setDecks={setDecks}/>
        )}

        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <CreateDeck closeModal={handleSetModalHidden} setDecks={setDecks}/>
        </ReactNativeModal>
      </View>
    </SafeAreaView>
  );
}
