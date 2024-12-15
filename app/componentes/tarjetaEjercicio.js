import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import images from '../../assets/images/images';

const tarjetaEjercicio = ({id,nombre}) => {
  return (
    //Se renderizan los ejercicios de acuerdo con su id y nombre
    <View className = 'w-36 mr-4' >
      <Image source={images[id]} className='w-full h-36 object-scale-down'/>
      <Text className='text-base text-center text-white'>{nombre}</Text>
    </View>
  )
}

export default tarjetaEjercicio
