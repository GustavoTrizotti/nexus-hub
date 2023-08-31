import { View, Text } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const 
TagComponent = ({ tag, selectedTag }) => {
  const [selected, setSelected] = useState(selectedTag);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <View>
      {selected ? (
        <View
          className="bg-primary p-2 m-2 rounded-md flex items-center justify-between flex-row"
        >
          <Icon name="checkbox-marked" size={30} color={"#fff"} onPress={handleSelect}/>
          <Text className="text-lg font-bold text-white capitalize p-2 px-4">
            {tag}
          </Text>
        </View>
      ) : (
        <View
          className="bg-gray-100 p-2 m-2 rounded-md items-center justify-between flex-row"
        >
          <Icon name="checkbox-blank-outline" size={30} color={"#AD6FEB"} onPress={handleSelect}/>
          <Text className="text-lg font-bold text-primary capitalize p-2 px-4">
            {tag}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TagComponent;
