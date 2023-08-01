import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../../components/MainHeader'

export default function Sessions() {
  return (
    <SafeAreaView>
      <MainHeader title="Sessions" />
      <View className="flex h-full justify-center items-center bg-white">
        <Text>Sessions</Text>
      </View>
    </SafeAreaView>
  )
}