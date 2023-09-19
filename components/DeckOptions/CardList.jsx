import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CardSheet from "./CardSheet";

const CardList = ({ deck, cards }) => {
  return (
    <View>
      <View className="flex flex-row px-4 m-6 items-center justify-between bg-gray-100 rounded-md">
        <TextInput className="flex-1 h-8 m-4 text-lg w-auto" placeholder="Search Card..." />
        <Icon name="magnify" size={24} color={"#AD6FEB"} />
      </View>
      <View className="flex items-center justify-center w-screen">
        {cards.map((card) => {
          return (
            <CardSheet key={card.id} deck={deck} card={card} name={deck.name} />
          );
        })}
      </View>
    </View>
  );
};

export default CardList;
