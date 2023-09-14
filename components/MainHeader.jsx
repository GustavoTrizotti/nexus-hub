import { View, Text, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
const MainHeader = ({ title }) => {
  
  const [fontsLoaded] = useFonts({
    'Sora': require('../assets/fonts/Sora/Sora-Regular.ttf')
  });

  const navigation = useNavigation();
  const route = useRoute();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="bg-white p-6 flex flex-row items-center justify-between">
      <StatusBar style="dark" backgroundColor="#fff" />
      {route.name === "HOME" ? (
        <Icon name="bars" size={24} color="#AD6FEB"/>
      ) : (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#AD6FEB" />
        </Pressable>
      )}
      {title != null ? (
        <Text className="text-primary text-center text-2xl font-bold" style={{fontFamily: 'Sora'}}>
          {title}
        </Text>
      ) : (
        <Text className="text-primary text-center uppercase text-2xl font-bold" style={{fontFamily: 'Sora'}}>
          {route.name}
        </Text>
      )}

      <Icon name="search" size={20} color="#AD6FEB" />
    </View>
  );
};

export default MainHeader;
