import { Home } from './src/views'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { theme } from './src/global/theme'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.pallete.background
  }
})
