import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import CreateCardBody from "../../components/Flashcards/CreateFlashcard/CreateCardBody";
import MainHeader from "../../components/MainHeader";
import KeyboardAvoidWrapper from "../../components/utils/KeyboardAvoidWrapper";
import { useFlashcards } from "../../context/FlashcardContext";
import { ScrollView } from "react-native";
import { useLoading } from "../../context/LoadingContext";
import { useTags } from "../../context/TagContext";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreateFlashcard = ({ deck }) => {
  const [flashcard, setFlashcard] = useState();
  const { createFlashcard } = useFlashcards();
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCreateFlashcard = async (flashcard) => {
    try {
      await createFlashcard(flashcard);
    } catch (error) {
      console.log("Error handling the creation of flashcard: ", error);
    }
  };

  return (
    <KeyboardAvoidWrapper bgColor="#FFF">
      <ScrollView>
        <MainHeader title={"Flashcards"} />
        <View>
          <Text className="text-lg text-center font-bold text-tertiary my-2">
            Create Flashcard
          </Text>
        </View>
        <View className="p-4 w-full flex items-center">
          <CreateCardBody flashcard={flashcard} setFlashcard={setFlashcard} />
          <View className="h-fit flex w-full py-2 mt-2">
            <Text className="mx-2 text-lg text-primary font-bold">
              Selecionar Tags
            </Text>
            <TagList
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </View>
          <Pressable
            className="p-4 w-full mt-6 px-6 flex bg-primary rounded-md"
            onPress={() => {
              console.log(flashcard, selectedTags);
            }}
          >
            <Text className="text-lg text-center text-white font-bold">
              Save Changes
            </Text>
          </Pressable>
          <View className="flex w-full flex-row">
            <Pressable className="p-4 flex-1 mt-6 mr-2 px-6 flex bg-red-400 rounded-md flex-row items-center justify-between">
              <Icon name="trash-can" size={28} color="#fff" />
              <Text className="text-lg text-center text-white font-bold">
                Delete Deck
              </Text>
            </Pressable>
            <Pressable className="p-4 flex-1 mt-6 ml-2 px-6 flex bg-yellow-400 rounded-md flex-row items-center justify-between">
              <Icon name="pencil" size={28} color="#fff" />
              <Text className="px-2 text-lg text-center text-white font-bold">
                Update Deck
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidWrapper>
  );
};

export default CreateFlashcard;

const TagList = ({ setSelectedTags, selectedTags }) => {
  const { tags, getTags } = useTags();
  const { isLoading } = useLoading();

  useEffect(() => {
    getTags();
  }, []);

  return (
    <ScrollView className="flex py-4 mt-2" horizontal={true}>
      <View className="flex flex-row">
        {tags
          ? tags.map((tag) => {
              return (
                <TagListItem
                  key={tag.id}
                  tag={tag}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
                />
              );
            })
          : null}
      </View>
    </ScrollView>
  );
};

const TagListItem = ({ tag, setSelectedTags, selectedTags }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags);
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    } else {
      const filteredTags = selectedTags.filter(
        (selectedTag) => selectedTag !== tag
      );
      setSelectedTags(filteredTags);
    }
  };

  const style = isSelected
    ? "flex flex-row justify-center items-center bg-primary p-2 px-4 mr-4 rounded-md"
    : "flex flex-row justify-center items-center bg-gray-100 p-2 px-4 mr-4 rounded-md";

  return (
    <Pressable className={style} onPress={toggleSelection}>
      {isSelected ? (
        <Icon name="checkbox-intermediate" size={32} color="#FFF" />
      ) : (
        <Icon name="checkbox-blank-outline" size={32} color="#AD6FEB" />
      )}
      <Text
        className={`font-semibold uppercase ${
          isSelected ? "text-white" : "text-primary"
        } text-lg p-2`}
      >
        {tag.name}
      </Text>
    </Pressable>
  );
};
