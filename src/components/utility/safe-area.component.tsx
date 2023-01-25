import styled from 'styled-components/native'
import { SafeAreaView, StatusBar, Platform } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' && StatusBar.currentHeight}px;
`

export const HomeContainer = styled.View`
  flex: 1;
  padding: 24px;
  background-color: #171717;
`
