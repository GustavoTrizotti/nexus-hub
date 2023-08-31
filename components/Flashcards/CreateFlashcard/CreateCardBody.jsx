import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CreateCardBody = () => {
  return (
    <View className="flex p-4 m-2 w-full">
      <View>
        <Text className="font-bold text-lg text-primary">Question</Text>
        <TextInput placeholder='Question...' multiline numberOfLines={5} className="bg-gray-100 p-4"/>
      </View>
      <View>

      </View>
    </View>
  )
}

export default CreateCardBody