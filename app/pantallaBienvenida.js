import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react'

const pantallaBienvenida = () => {
  const { nombre, mensaje } = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'start',
      alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2'>
      <Text className = 'text-2xl text-white'>{mensaje}...</Text>
    </SafeAreaView>
  )
}

export default pantallaBienvenida

const styles = StyleSheet.create({})