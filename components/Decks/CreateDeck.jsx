import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDeck } from "../../context/DeckContext";
import { useLoading } from "../../context/LoadingContext";
import { useSubjects } from "../../context/SubjectContext";
import { ScrollView } from "react-native";

const CreateDeck = ({ closeModal }) => {
  const [deck, setDeck] = useState(null);
  const { createDeck } = useDeck();
  const { isLoading, refresh } = useLoading();

  const [selectedTags, setSelectedTags] = useState([]);

  /* const handlePostDeck = async () => {
    try {
      await createDeck({
        name: deck.name,
      });
    } catch (error) {
      console.log("Error creating the deck: ", error);
    }
    closeModal();
  }; */

  // Add Icon to Right in DeckListItem - Add Deck inside another

  return (
    <View className="flex relative justify-center items-center p-2 py-8 bg-white mx-4 my-8 h-fit rounded-lg">
      <View className="flex px-6 py-2 gap-y-4 w-full">
        <Text className="text-xl text-center text-primary font-bold uppercase mb-4">
          New Deck
        </Text>
        <View>
          <TextInput
            className="flex p-4 bg-gray-100 mt-2 text-lg rounded-lg"
            placeholder="Name..."
            onChangeText={(e) => setDeck({ ...deck, name: e })}
          />
        </View>
        <SubjectList />
        <Pressable
          className="p-2 bg-primary rounded-md"
          onPress={() => console.log("Teste")}
        >
          <Text className="text-lg font-bold text-white text-center p-2">
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const SubjectList = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const { subjects } = useSubjects();

  return (
    <ScrollView className="flex flex-row py-4 mt-2" horizontal={true}>
      {subjects.map((subject) => {
        return (
          <SubjectListItem
            subject={subject}
            key={subject.id}
            selectedSubjects={selectedSubjects}
            setSelectedSubjects={setSelectedSubjects}
          />
        );
      })}
    </ScrollView>
  );
};

const SubjectListItem = ({
  subject,
  selectedSubjects,
  setSelectedSubjects,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      if (selectedSubjects.includes(subject)) {
        setSelectedSubjects(selectedSubjects);
      } else {
        setSelectedSubjects([...selectedSubjects, subject]);
      }
    } else {
      const filteredSubjects = selectedSubjects.filter(
        (selectedSubject) => selectedSubject !== subject
      );
      setSelectedSubjects(filteredSubjects);
    }
  };

  return (
    <Pressable
      style={
        isSelected
          ? { backgroundColor: "#AD6FEB", borderRadius: 10 }
          : { borderBottomColor: subject.color, borderBottomWidth: 4 }
      }
      className="flex p-4 mr-4"
      onPress={toggleSelection}
    >
      <Text
        className="text-lg font-semibold px-2"
        style={isSelected ? { color: subject.color } : { color: subject.color }}
      >
        {subject.name}
      </Text>
    </Pressable>
  );
};

export default CreateDeck;
