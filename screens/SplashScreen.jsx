import { View, Text, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View className="flex justify-center items-center w-full h-full" style={{backgroundColor: "#f9f9f9"}}>
      <Image source={require('../assets/splash.png')} className="flex-shrink w-1/2"/>
    </View>
  )
}

export default SplashScreen