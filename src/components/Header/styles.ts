import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: getStatusBarHeight() + 48
  },
  backButton: {
    marginBottom: 28
  },
  title: {
    fontSize: 24,
    color: theme.colors.common.white,
    fontFamily: theme.fonts.medium,
  },
  valueContainer: {
    flexDirection: 'row'
  },
  currency: {
    fontSize: 36,
    color: theme.colors.pallete.secondary,
    fontFamily: theme.fonts.regular,
    marginRight: 8
  },
  value: {
    fontSize: 36,
    color: theme.colors.pallete.secondary,
    fontFamily: theme.fonts.semiBold
  }
})
