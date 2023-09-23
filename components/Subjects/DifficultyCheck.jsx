import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DifficultyCheck = ({checked, handleCheck}) => {
  return (
    <TouchableOpacity onPress={() => handleCheck()} className="flex mx-3" activeOpacity={.2}>
      {checked ? (
        <Icon name="circle-slice-8" size={48} color="#AD6FEB" />
      ) : <Icon name="circle-outline" size={48} color="#AD6FEB" />}
    </TouchableOpacity>
  );
};

export default DifficultyCheck;
