import { View, Text } from 'react-native'
import React from 'react'

const CustomToast = ({message}) => {
  return (
    <View className="flex float-right w-fit m-4 mr-4 p-4 bg-light shadow-xl drop-shadow-lg border-l-4 border-primary rounded-r-sm" style={{elevation: 24}}>
      <Text className="text-md text-white uppercase font-semibold">{message}</Text>
    </View>
  )
}

export default CustomToast