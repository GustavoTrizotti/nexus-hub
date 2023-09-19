import { View, Text, Dimensions } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import percentageFormat from "../../utils/deckCardPercentageFormat";

const CustomDeckChart = ({ cards }) => {
  const deckCards = cards;
  const deckCardsLength = cards.length;
  const countNew = deckCards.filter((deck) => deck.status === "NEW").length;
  const countLearning = deckCards.filter(
    (deck) => deck.status === "LEARNING"
  ).length;
  const countLearned = deckCards.filter(
    (deck) => deck.status === "LEARNED"
  ).length;

  const width = Dimensions.get("window").width * 0.5;
  const series = [countNew, countLearning, countLearned];
  const sliceColor = ["#AD6FEB", "#CF9EFF", "#9d63d4"];

  return (
    <View className="flex gap-4">
      <View className="flex justify-center items-center relative">
        <PieChart
          widthAndHeight={width}
          series={series}
          sliceColor={sliceColor}
          coverFill={"#FFF"}
          coverRadius={0.5}
        />
        <Text className="text-primary text-3xl text-center absolute font-bold">
          {deckCards.length}
        </Text>
      </View>
      <View>
        {countNew != 0 ? (
          <View className="flex flex-row items-center justify-center gap-2">
            <Icon name="school" size={30} color={"#AD6FEB"} />
            <Text className="text-xl text-primary font-bold">
              New: {percentageFormat(deckCardsLength, countNew)}%
            </Text>
          </View>
        ) : null}
        {countLearning != 0 ? (
          <View className="flex flex-row items-center justify-center gap-2">
            <Icon name="lightbulb" size={30} color={"#CF9EFF"} />
            <Text className="text-xl text-light font-bold">
              Learning: {percentageFormat(deckCardsLength, countLearning)}%
            </Text>
          </View>
        ) : null}
        {countLearned != 0 ? (
          <View className="flex flex-row items-center justify-center gap-2">
            <Icon name="check-bold" size={30} color={"#9d63d4"} />
            <Text className="text-xl font-bold" style={{color: "#9d63d4"}}>
              Learned: {percentageFormat(deckCardsLength, countLearned)}%
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CustomDeckChart;
