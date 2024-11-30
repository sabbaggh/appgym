import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import TarjetaEjercicio from './tarjetaEjercicio'
import { TouchableOpacity } from 'react-native'

const tarjetaRutina = () => {
  return (
    <View className='w-11/12 bg-neutral-700 rounded px-2 py-2 my-2'>
      <Text className = 'text-xl text-white'>holaaaaaa</Text>
      <ScrollView horizontal={true}>
      <View className = 'w-full bg-stone-800 p-2 flex-row pr-0 rounded'>
        <TarjetaEjercicio/>
        <TarjetaEjercicio/>
        <TarjetaEjercicio/>
        <TarjetaEjercicio/>
      </View>
      </ScrollView>
      <Text className = 'text-white text-base'>Nota: </Text>
      <View className = 'flex flex-row-reverse'>
        <TouchableOpacity className = 'bg-sky-500 w-2/6 p-3 mt-2 rounded-lg ml-'>
            <Text className = 'text-white text-center'>Seleccionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default tarjetaRutina

const styles = StyleSheet.create({})