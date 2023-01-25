import React from 'react'
import { NativeBaseProvider } from 'native-base'

import { SafeAreaContainer } from './src/components/utility/safe-area.component'

import HomeScreen from './src/features/home/screens/home.screen'

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaContainer>
        <HomeScreen />
      </SafeAreaContainer>
    </NativeBaseProvider>
  )
}
