import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Header } from '../../components'

export const ChargeInfo: React.FC = () => {
  return (
    <View>
      <Header 
        title='Victor Fernando'
        value='68,00'
        canGoBack
      />
    </View>
  )
}
