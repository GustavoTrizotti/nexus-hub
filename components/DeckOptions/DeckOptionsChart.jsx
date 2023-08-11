import { View, Text } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";

const DeckOptionsChart = () => {

  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Learned", "Learning", "New"],
    data: [0.2, 0.3, 0.5],
  };

  return (
    <View className="flex w-full items-center justify-center">
      <ProgressChart
        data={data}
        width={screenWidth - 32}
        height={260}
        strokeWidth={20}
        radius={32}
        hideLegend={true}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#fff",
          backgroundGradientToOpacity: 1,
          color: (opacity) => `rgba(173, 111, 235, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false,
        }}
      />
    </View>
  );
};

export default DeckOptionsChart;
