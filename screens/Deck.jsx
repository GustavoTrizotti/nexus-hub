import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";

import ReactNativeModal from "react-native-modal";
import CreateDeck from "../components/Decks/CreateDeck";
import DeckList from "../components/Decks/DeckList";

import { useDeck } from "../context/DeckContext";
import { ScrollView } from "react-native";
import { RefreshControl } from "react-native";

export default function Decks() {
  const { decks, setDecks, isLoading, setIsLoading } = useDeck();

  const [modalVisible, setModalVisible] = useState(false);

  const refreshComponent = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSetModalVisible = () => {
    setModalVisible(true);
  };

  const handleSetModalHidden = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <ScrollView
        className="flex bg-white w-full h-full"
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => refreshComponent()}
          />
        }
      >
        <MainHeader />

        <DeckHeader handleSetModalVisible={handleSetModalVisible} />
        {isLoading ? (
          <View className="flex items-center justify-center p-4 mt-4">
            <ActivityIndicator size="large" color="#AD6FEB" />
          </View>
        ) : (
          <DeckList decks={decks} setDecks={setDecks} />
        )}

        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <CreateDeck closeModal={handleSetModalHidden} setDecks={setDecks} />
        </ReactNativeModal>
      </ScrollView>
    </SafeAreaView>
  );
}
