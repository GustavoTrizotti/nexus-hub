import { Text, View } from "react-native";
import CardSheet from "./CardSheet";

const CardList = ({ deck, cards }) => {
  return (
    <View className="p-4">
      <View className="flex flex-row p-4 border-t-2 border-gray-200 w-full items-center justify-center">
        <Text className="text-xl text-center uppercase font-bold text-primary">Card List</Text>
      </View>
      <View className="flex items-center justify-center w-full">
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
