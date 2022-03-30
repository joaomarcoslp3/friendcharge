import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, ChargeInfo } from '../views'
import { theme } from '../global/theme'

const AppStack = createStackNavigator()

export const AppRoutes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ 
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.pallete.background
        }
      }}>
        <AppStack.Screen name='Home' component ={Home} />
        <AppStack.Screen name='ChargeInfo' component ={ChargeInfo} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
