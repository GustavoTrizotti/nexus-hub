import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CardSheet from "./CardSheet";

const CardList = ({ deck }) => {
  return (
    <View>
      <View className="flex flex-row px-4 m-6 items-center justify-between bg-gray-100">
        <TextInput className="flex-1 h-8 m-4 text-lg w-auto" placeholder="Search Card..." />
        <Icon name="magnify" size={24} color={"#AD6FEB"} />
      </View>
      <View className="flex items-center justify-center w-screen">
        {deck.cards.map((card, key) => {
          return (
            <CardSheet key={key} deck={deck} card={card} name={deck.name} />
          );
        })}
      </View>
    </View>
  );
};

export default CardList;
