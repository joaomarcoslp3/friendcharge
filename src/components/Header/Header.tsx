import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { styles } from './styles'
import { theme } from '../../global/theme'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  canGoBack?: boolean
  title: string
  value?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { title, value, canGoBack } = props
  const navigation = useNavigation()

  const handleBackPage = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableOpacity onPress={handleBackPage} style={styles.backButton}>
          <Feather name='arrow-left' size={24} color={theme.colors.common.white} /> 
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.valueContainer}>
        <Text style={styles.currency}>R$</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}
