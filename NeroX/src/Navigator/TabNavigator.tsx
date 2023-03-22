import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../screens/welcome/Welcome'


const Tab = createBottomTabNavigator()



const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Screen1' component={Welcome} />
      <Tab.Screen name='Screen2' component={Welcome} />
      <Tab.Screen name='Screen3' component={Welcome} />
    </Tab.Navigator>
  )
}

export default TabNavigator