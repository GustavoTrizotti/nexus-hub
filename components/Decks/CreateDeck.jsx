import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useDeck } from "../../context/DeckContext";
import { useLoading } from "../../context/LoadingContext";
import { useTags } from "../../context/TagContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

const CreateDeck = ({ setDecks, closeModal }) => {
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
        <TagList
          setSelectedTags={setSelectedTags}
          selectedTags={selectedTags}
        />
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

export default CreateDeck;
