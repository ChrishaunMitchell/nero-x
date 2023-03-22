import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native/Libraries/Image/Image'

const Welcome = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={require("../assets/images/logo.png")} />
      </View>
    </SafeAreaView>
  )
}

export default Welcome