import { Text, View,SafeAreaView,ImageBackground } from 'react-native'
import React from 'react'

const contenedorPrincipal = ({ children }) => {
  return (
    <SafeAreaView className='flex-1' >
        <ImageBackground source={require('../../assets/images/fondo.jpg')} resizeMode="cover" style={{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
        {children}
        </ImageBackground>
    </SafeAreaView>
  )
}

export default contenedorPrincipal;
