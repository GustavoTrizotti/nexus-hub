import React, { useState } from "react";
import { ScrollView } from "react-native";
import TagComponent from "./TagComponent";

const TagList = ({ card }) => {
  const [tagList, setTagList] = useState(card.tags);

  return (
    <ScrollView className="flex flex-row py-2 mt-2" horizontal>
      {tagList.map((tag) => {
        return <TagComponent tag={tag} key={tag}/>;
      })}
    </ScrollView>
  );
};

export default TagList;
