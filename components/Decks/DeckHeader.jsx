import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DeckHeader = () => {
  return (
    <View className="flex px-2 flex-row w-full justify-between items-center">
      <View className="flex flex-col p-3">
        <View className="flex flex-row items-center align-center gap-2">
          <Text className="text-primary font-bold text-xl">My Decks</Text>
          <Icon name="cards" color="#AD6FEB" size={24} />
        </View>
        <Text className="text-tertiary text-md py-1">
          Spaced Revision Decks
        </Text>
      </View>
      <View className="flex flex-col p-3">
        <TouchableOpacity
          className="bg-primary p-3 px-4 rounded-md"
          activeOpacity={0.75}
          onPress={() => {
            console.log("Teste");
          }}
        >
          <Text className="text-white text-md uppercase font-bold">
            New Deck
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckHeader;
