import { View, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FormInput = ({ name, placeholder, isPassword }) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(true);

  return (
    <View className="flex flex-row border-b-2 border-gray-300 justify-between">
      {!visible ? (
        <TextInput
          placeholder={placeholder}
          className="text-secondary text-lg"
          value={text}
          onChangeText={(e) => setText(e)}
          secureTextEntry={isPassword}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          className="text-secondary text-lg"
          value={text}
          onChangeText={(e) => setText(e)}
        />
      )}

      {!isPassword ? (
        <View className="flex justify-center items-center p-2">
          {text.length > 0 ? (
            <Icon
              name={"close-circle"}
              color="#d1d5db"
              size={32}
              onPress={() => setText("")}
            />
          ) : (
            <Icon name={name} color="#d1d5db" size={32} />
          )}
        </View>
      ) : (
        <View className="flex justify-center items-center p-2">
          {visible ? (
            <Icon
              name={"eye"}
              color="#d1d5db"
              size={32}
              onPress={() => setVisible(!visible)}
            />
          ) : (
            <Icon
              name={"lock"}
              color="#d1d5db"
              size={32}
              onPress={() => setVisible(!visible)}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default FormInput;
