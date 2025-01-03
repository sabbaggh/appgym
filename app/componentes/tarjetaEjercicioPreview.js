import { View, Text } from 'react-native'
import React from 'react'

const tarjetaEjercicioPreview = ({id, nombre}) => {
  return (
    <View>
        <Image source={images[id]} className='w-full h-36 object-scale-down'/>
        <Text>{nombre}</Text>
    </View>
  )
}

export default tarjetaEjercicioPreview