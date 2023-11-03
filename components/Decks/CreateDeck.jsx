import React, { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDeck } from "../../context/DeckContext";
import { useSubjects } from "../../context/SubjectContext";

const CreateDeck = ({ closeModal }) => {
  const [deck, setDeck] = useState(null);
  const { createDeck, isLoading } = useDeck();

  const setSelectedSubject = (newSelectedSubject) => {
    setDeck({ ...deck, selectedSubject: newSelectedSubject });
  };

  const handlePostDeck = async (deck) => {
    try {
      await createDeck({
        name: deck.name,
        subjectId: deck ? deck.selectedSubject.id : null,
        parentDeckId: null,
      });
    } catch (error) {
      console.log("Error creating the deck: ", error);
    }
    closeModal();
  };

  // Add Icon to Right in DeckListItem - Add Deck inside another

  return (
    <View className="flex relative justify-center items-center p-2 py-8 bg-white mx-4 my-8 h-fit rounded-lg">
      <View className="flex px-6 py-2 gap-y-4 w-full">
        <Text className="text-xl text-center text-primary font-bold uppercase mb-4">
          New Deck
        </Text>
        <View>
          <TextInput
            className="flex p-4 bg-gray-100 text-lg rounded-lg"
            placeholder="Name..."
            onChangeText={(e) => setDeck({ ...deck, name: e })}
          />
        </View>
        <View className="w-full flex py-2">
          <Text className="text-lg font-semibold text-primary">Subject</Text>
          <SubjectList deck={deck} setSelectedSubject={setSelectedSubject} />
        </View>
        <Pressable
          className="p-2 bg-primary rounded-md"
          onPress={() => handlePostDeck(deck)}
        >
          {isLoading ? (
            <ActivityIndicator color={"#FFF"} size={40} />
          ) : (
            <Text className="text-lg font-bold text-white text-center p-2">
              Save Changes
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

const SubjectList = ({ deck, setSelectedSubject }) => {
  const toggleSelection = (subject) => {
    const isSelected = deck ? deck.selectedSubject === subject : false;

    if (!isSelected) {
      setSelectedSubject(subject);
    } else {
      setSelectedSubject(null);
    }
  };

  const { subjects } = useSubjects();

  return (
    <ScrollView className="flex flex-row py-4" horizontal={true}>
      {subjects.map((subject) => {
        return (
          <SubjectListItem
            subject={subject}
            key={subject.id}
            selectedSubject={deck ? deck.selectedSubject : null}
            setSelectedSubject={setSelectedSubject}
            toggleSelection={toggleSelection}
          />
        );
      })}
    </ScrollView>
  );
};

const SubjectListItem = ({ subject, selectedSubject, toggleSelection }) => {
  const isSelected = selectedSubject === subject;

  return (
    <Pressable
      style={
        isSelected
          ? { backgroundColor: "#AD6FEB", borderRadius: 10 }
          : { backgroundColor: "#eee", borderRadius: 10 }
      }
      className="flex p-4 mr-4"
      onPress={() => toggleSelection(subject)}
    >
      <Text
        className="text-lg font-semibold px-2"
        style={isSelected ? { color: subject.color } : { color: "#AD6FEB" }}
      >
        {subject.name}
      </Text>
    </Pressable>
  );
};

export default CreateDeck;
