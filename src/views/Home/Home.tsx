import { Text, View } from 'react-native'
import { Header } from '../../components'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export const Home: React.FC = () => {
  const navigation = useNavigation()

  const handleNavigateToChargeInfo = () => {
    navigation.navigate('ChargeInfo')
  }

  return (
    <View>
      <Header title='Valor total' value='1038,60' />
      <RectButton onPress={() => handleNavigateToChargeInfo()}>
        <Text style={{ color: '#FFF' }}>Teste</Text>
      </RectButton>
    </View>
  )
}
