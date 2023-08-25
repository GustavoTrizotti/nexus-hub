import { View } from "react-native";
import React, { useState } from "react";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";

import DeckList from "../components/Decks/DeckList";
import CreateDeck from "../components/Decks/CreateDeck";
import ReactNativeModal from "react-native-modal";

export default function Decks() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSetModalVisible = () => {
    setModalVisible(true)
    console.log("true")
  };

  const handleSetModalHidden = () => {
    setModalVisible(false)
    console.log("false")
  };

  return (
    <SafeAreaView>
      <MainHeader />
      <View className="flex bg-white w-full h-full">
        <DeckHeader handleSetModalVisible={handleSetModalVisible}/>
        <DeckList />
        <ReactNativeModal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
          <CreateDeck handleSetModalHidden={handleSetModalHidden}/>
        </ReactNativeModal>
      </View>
    </SafeAreaView>
  );
}
