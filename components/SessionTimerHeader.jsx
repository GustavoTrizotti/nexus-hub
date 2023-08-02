import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const SessionTimerHeader = () => {
  return (
    <View className="flex w-full justify-evenly items-center flex-row p-4">
        <View className="bg-primary p-8 w-fit flex items-center justify-center rounded-full">
            <Icon name='play' size={36} color="#fff"/>
        </View>
        
        <View className="flex justify-center items-center p-2 gap-2">
            <Text className="text-center text-lg">Session</Text>
            <Text className="text-center text-4xl">00:00:00</Text>
        </View>
    </View>
  )
}

export default SessionTimerHeader