import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const tarjetaEjercicio = () => {
  return (
    <View className = 'w-36 mr-4' >
      <Image source={require('../../assets/images/ejercicios/1.gif')} className='w-full h-36 object-scale-down'/>
      <Text className='text-base text-center text-white'>Press de banca con barra</Text>
    </View>
  )
}

export default tarjetaEjercicio

const styles = StyleSheet.create({})