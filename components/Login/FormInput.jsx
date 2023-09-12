import { View, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const FormInput = ({ name, placeholder, isPassword, color="#d1d5db", textColor, changeText, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View className="flex flex-row border-b-2 justify-between mb-3" style={{borderColor: color}}>
      {!visible ? (
        <TextInput
          placeholder={placeholder}
          className="text-lg flex-1"
          style={{color: textColor}}
          value={text}
          onChangeText={(e) => changeText(e)}
          secureTextEntry={isPassword}
          placeholderTextColor={color}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          className="text-secondary text-lg flex-1"
          style={{color: textColor}}
          value={text}
          onChangeText={(e) => changeText(e)}
          placeholderTextColor={color}
        />
      )}

      {!isPassword ? (
        <View className="flex justify-center items-center p-2">
          {text.length > 0 ? (
            <Icon
              name={"close-circle"}
              color={color}
              size={32}
              onPress={() => changeText("")}
            />
          ) : (
            <Icon name={name} color={color} size={32} />
          )}
        </View>
      ) : (
        <View className="flex justify-center items-center p-2">
          {visible ? (
            <Icon
              name={"eye"}
              color={color}
              size={32}
              onPress={() => setVisible(!visible)}
            />
          ) : (
            <Icon
              name={"lock"}
              color={color}
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
