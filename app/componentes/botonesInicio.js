import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const botonesInicio = () => {
  return (
    <View className='flex flex-row justify-around content-center bg-white w-full py-16 px-5'>
        <TouchableOpacity >
          <Text>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
  )
}

export default botonesInicio

const styles = StyleSheet.create({})