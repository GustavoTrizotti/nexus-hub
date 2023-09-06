import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SearchInput = ( {color, placeholderInput} ) => {
  return (
    <View className="flex flex-1 flex-row bg-gray-100 w-full p-2 py-3 gap-x-2 rounded-md">
        <Icon name="magnify" size={30} color={color}/>
        <TextInput placeholder={placeholderInput} className="text-lg"/>
    </View>
    
  )
}

export default SearchInput