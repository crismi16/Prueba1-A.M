import React from 'react'
import { SafeAreaView } from 'react-native'
import { ParesImpares } from './src/screens/ParesImpares'
import { Screen } from './src/screens/Screen'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ParesImpares/>
      {/* <Screen/> */}
    </SafeAreaView>
  )
}
