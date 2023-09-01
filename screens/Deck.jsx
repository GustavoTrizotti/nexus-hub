import { View } from "react-native";
import React, { useState } from "react";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Decks/DeckList";
import CreateDeck from "../components/Decks/CreateDeck";
import ReactNativeModal from "react-native-modal";
import { useSelector } from "react-redux";

export default function Decks() {
  const [modalVisible, setModalVisible] = useState(false);
  const { decks } = useSelector((state) => state.deckReducer);

  const handleSetModalVisible = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView>
      <MainHeader />
      <View className="flex bg-white w-full h-full">
        <DeckHeader handleSetModalVisible={handleSetModalVisible} />
        <DeckList deckList={decks.decks} />
        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <CreateDeck />
        </ReactNativeModal>
      </View>
    </SafeAreaView>
  );
}
