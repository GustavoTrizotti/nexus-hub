import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchInput = ( {color, placeholderInput} ) => {
  return (
    <View className="flex flex-1 flex-row border-b-4 border-gray-200 w-full p-2 py-3 gap-x-2">
        <Icon name="magnify" size={30} color={color}/>
        <TextInput placeholder={placeholderInput} className="text-lg"/>
    </View>
    
  )
}

export default SearchInput