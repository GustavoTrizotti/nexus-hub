import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainHeader from "../../components/MainHeader";

import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import PieChart from "react-native-pie-chart";
import CardList from "../../components/DeckOptions/CardList";
import EditDeckModal from "../../components/DeckOptions/EditDeckModal";
import { useFlashcards } from "../../context/FlashcardContext";
import randomCard from "../../utils/randomCard";
import CreateFlashcard from "./CreateFlashcard";

const DeckOptions = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const deck = route.params.deck;

  const { getFlashcardsByDeckId, flashcards, setError } = useFlashcards();

  const handleGetFlashcards = (id) => {
    try {
      getFlashcardsByDeckId(id);
    } catch (error) {
      setError(error.message)
    }
  };

  useEffect(() => {
    handleGetFlashcards(deck.id);
    console.log(flashcards);
  }, [])

  const create = flashcards && flashcards.length > 0;

  const selectedCard = randomCard(flashcards);
  const navigation = useNavigation();

  if (create) {
    return (
      <SafeAreaView className="flex bg-white h-full w-full">
        <ScrollView>
          <MainHeader title={deck.name} />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <DeckOptionsHeader navigation={navigation} deck={deck} />
            <View className="flex items-center justify-center mt-4">
              <DeckOptionsChart deck={deck} cards={flashcards} />
              <View className="flex flex-row mt-6 mx-2 items-center justify-between">
                <Pressable
                  className="flex flex-1 bg-primary p-4 m-2 rounded-md"
                  onPress={() => {
                    navigation.navigate("Flashcard", {
                      card: selectedCard,
                      deck: deck,
                    });
                  }}
                >
                  <Text className="w-fit text-lg uppercase font-bold text-white text-center">
                    Study
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-2 h-fit bg-primary p-4 m-2 rounded-md"
                  onPress={() => setIsVisible(true)}
                >
                  <Icon name="pencil" size={24} color="#FFF" />
                </Pressable>
                <Pressable className="flex flex-2 bg-primary p-4 m-2 rounded-md">
                  <Icon name="delete" size={24} color="#FFF" />
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
          <CardList deck={deck} cards={flashcards} />
        </ScrollView>
        <EditDeckModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          deck={deck}
        />
      </SafeAreaView>
    );
  } else {
    return <CreateFlashcard deck={deck} />;
  }
};

const DeckOptionsHeader = ({ navigation, deck }) => {
  return (
    <View className="flex px-2 flex-row w-full justify-between items-center">
      <View className="flex flex-col p-3">
        <View className="flex flex-row items-center align-center gap-2">
          <Text className="text-primary font-bold text-xl">{deck.name}</Text>
          <Icon name="cards" color="#AD6FEB" size={24} />
        </View>
        <Text className="text-light font-semibold text-md uppercase py-1">
          Spaced Revision Decks
        </Text>
      </View>
      <View className="flex flex-col p-3">
        <Pressable
          className="flex flex-row bg-primary p-3 px-2 rounded-md items-center justify-between gap-x-2"
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("CreateCard", { deck: deck });
          }}
        >
          <Icon name="cards" color="#FFFFFF" size={24} />
          <Text className="text-white text-md uppercase font-bold px-2">
            New Card
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const DeckOptionsChart = ({ cards }) => {
  return (
    <View className="flex w-full items-center justify-center">
      <CustomDeckChart cards={cards} />
    </View>
  );
};

const CustomDeckChart = ({ cards }) => {
  const countNew = cards.filter((deck) => deck.status === "NEW").length;
  const countLearning = cards.filter(
    (deck) => deck.status === "LEARNING"
  ).length;
  const countLearned = cards.filter(
    (deck) => deck.status === "LEARNED"
  ).length;
  console.log(countNew, countLearning, countLearned);

  const width = Dimensions.get("window").width * 0.55;
  const series = [countNew, countLearning, countLearned];
  const sliceColor = ["#ddc6f5", "#AD6FEB", "#8037c8"];

  return (
    <View className="flex flex-row items-center justify-center mx-6">
      <View className="flex justify-center items-center relative flex-1 py-4">
        <PieChart
          widthAndHeight={width}
          series={series}
          sliceColor={sliceColor}
          coverFill={"#FFF"}
          coverRadius={0.5}
        />
        <Text className="text-primary text-3xl text-center absolute font-bold">
          {cards.length}
        </Text>
      </View>
    </View>
  );
};

export default DeckOptions;
