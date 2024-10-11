import React from 'react'
import { NativeBaseProvider } from 'native-base'
import App from './App'

export default function AppWrapper() {
  return (
    <NativeBaseProvider>
        <App/>
    </NativeBaseProvider>
  )
}