import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const perfil = () => {
  const { nombre, mensaje } = useLocalSearchParams();
  return (
    <View>
      <Text>Nombre de usuario: {global.usuario.nombre}</Text>
      <Text>Nivel: {global.usuario.nivel}</Text>
      <Text>Objetivo: {global.usuario.objetivo}</Text>
      <Text>Altura: {global.usuario.altura}</Text>
      <Text>Peso: {global.usuario.peso}</Text>
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({})