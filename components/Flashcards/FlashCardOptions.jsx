import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFlashcards } from "../../context/FlashcardContext";
import { Toast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

const FlashcardOptions = ({ isAnswer, handleRevealAnswer, card }) => {
  const flashcardOptions = [
    { name: "Again", color: "bg-subjectRed" },
    { name: "Hard", color: "bg-subjectYellow" },
    { name: "Good", color: "bg-subjectGreen" },
    { name: "Easy", color: "bg-subjectBlue" },
  ];

  const navigation = useNavigation();

  const { getFlashcardsByDeckId, submitFlashcard, setError } = useFlashcards();

  const handleSubmitFlashcard = async (id, response) => {
    try {
      if (await submitFlashcard(id, response)) {
        Toast.show("Flashcard enviado com sucesso!", )
        navigation.goBack();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View>
      {isAnswer ? (
        <View className="flex flex-row border-t-2 border-gray-300 py-4 justify-center items-center">
          {flashcardOptions.map((option, idx) => {
            const buttonStyle = `flex flex-1 mx-1 rounded-md justify-center items-center p-2 ${option.color}`;
            return (
              <TouchableOpacity
                className={buttonStyle}
                key={idx}
                onPress={() => {
                  handleSubmitFlashcard(card.id, option.name.toUpperCase());
                  getFlashcardsByDeckId(card.deckId);
                }}
              >
                <Text className="text-center text-secondary font-bold text-lg">
                  {option.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <View className="flex flex-row border-t-2 border-gray-300 py-4 justify-center items-center">
          <Pressable
            className="flex flex-row"
            onPress={() => {
              handleRevealAnswer();
            }}
          >
            <Text className="text-center text-xl">Reveal Answer</Text>
            <Icon name="chevron-right" size={30} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default FlashcardOptions;
