import React, { useState } from "react";
import { ScrollView } from "react-native";
import TagComponent from "./TagComponent";
import tags from "../../../utils/dataTagsObject";

const TagList = ({ card }) => {
  const [tagList, setTagList] = useState(tags);
  const [cardTags, setCardTags] = useState(card.tags);

  return (
    <ScrollView className="flex flex-row py-2 mt-2" horizontal>
      {tagList.map((tag, i) =>
        tag == cardTags[i] ? (
          <TagComponent tag={tag} selectedTag={true} key={tag}/>
        ) : (
          <TagComponent tag={tag} selectedTag={false} key={tag}/>
        )
      )}
    </ScrollView>
  );
};

export default TagList;
