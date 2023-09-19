import { View } from "react-native";
import React from "react";
import CustomDeckChart from "./CustomDeckChart";

const DeckOptionsChart = ({ cards }) => {
  return (
    <View className="flex w-full items-center justify-center">
      <CustomDeckChart cards={cards}/>
    </View>
  );
};

export default DeckOptionsChart;
