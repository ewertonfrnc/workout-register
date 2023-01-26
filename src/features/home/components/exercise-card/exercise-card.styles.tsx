import styled from 'styled-components/native'
import { WebView } from 'react-native-webview'

import { LinearGradient } from 'expo-linear-gradient'

export const BackgroundImage = styled.ImageBackground`
  border-radius: 16px;
`

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const LinearGradientContainer = styled(LinearGradient).attrs({
  colors: ['transparent', '#ea580c'],
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  opacity: 0.8;
`
