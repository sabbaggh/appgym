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
      <Text>Dificultad Promedio: {global.usuario.dPromedio}</Text>
      <Text>Tiempo promedio para completar rutinas: {global.usuario.tPromedio}</Text>
      <Text>Cansancio Promedio: {global.usuario.cPromedio}</Text>
      <Text>Rutinas Completadas: {global.usuario.rCompletadas}</Text>
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({})