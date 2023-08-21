import { View, Dimensions } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";

const DeckOptionsChart = ( { deck } ) => {
  const deckCards = deck.cards;

  const width = Dimensions.get("window").width * 0.5;
  const series = [deckCards.filter(deck => deck.status === "NEW").length, deckCards.filter(deck => deck.status === "LEARNING").length, deckCards.filter(deck => deck.status === "LEARNED").length]
  const sliceColor = ["#AD6FEB", "#CF9EFF", "#4f4e4e"];

  return (
    <View className="flex w-full items-center justify-center">
      <PieChart 
        widthAndHeight={width}
        series={series}
        sliceColor={sliceColor}
        coverFill={"#FFF"}
        coverRadius={0.5}
      />
    </View>
  );
};

export default DeckOptionsChart;