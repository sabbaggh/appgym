import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const botonesInicio = () => {
  return (
    <View className='flex flex-row justify-around content-center w-full py-16 px-5'>
        <Link href="/pantallaRegistro"  className='bg-sky-500 py-3 px-3 rounded-xl'>
          <Text className='text-xl text-white'>Registrarse</Text>
        </Link >
        <TouchableOpacity className='bg-white py-3 px-3 rounded-xl'>
          <Text className='text-xl text-black'>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
  )
}

export default botonesInicio

const styles = StyleSheet.create({})