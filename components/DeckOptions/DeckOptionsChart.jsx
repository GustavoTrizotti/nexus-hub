import { View } from "react-native";
import React from "react";
import CustomDeckChart from "./CustomDeckChart";

const DeckOptionsChart = ({ deck }) => {
  return (
    <View className="flex w-full items-center justify-center">
      <CustomDeckChart deck={deck}/>
    </View>
  );
};

export default DeckOptionsChart;
