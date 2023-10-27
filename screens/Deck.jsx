import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DeckHeader from "../components/Decks/DeckHeader";
import MainHeader from "../components/MainHeader";

import ReactNativeModal from "react-native-modal";
import CreateDeck from "../components/Decks/CreateDeck";
import DeckList from "../components/Decks/DeckList";

import { ScrollView } from "react-native";
import { useDeck } from "../context/DeckContext";

export default function Decks() {

  // TODO
  // Verificar se Deck possui atributo parentDeckId
  // Se possui, verificar a posição do parentDeckId na lista de decks e colocar o Deck +1 posição no array
  // Deck -> Tipo diferente de item da lista (barra lateral e collapsable)

  // TODO
  // Verificar se Deck possui atributo subjectId
  // Se possui criar lista diferente (collapsable) para armazenar os decks que tem relação com as subjects
  
  const [modalVisible, setModalVisible] = useState(false);

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
      >
        <MainHeader />
        <DeckHeader handleSetModalVisible={handleSetModalVisible} />
        <DeckList />
        <ReactNativeModal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <CreateDeck closeModal={handleSetModalHidden}/>
        </ReactNativeModal>
      </ScrollView>
    </SafeAreaView>
  );
}
