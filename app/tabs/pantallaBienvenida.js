import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import TarjetaRutina from '../componentes/tarjetaRutina';

const pantallaBienvenida = () => {
  const { nombre, mensaje } = useLocalSearchParams();
  return (
    <ScrollView className = 'bg-neutral-800'>
    <SafeAreaView style={{flex: 1,
      justifyContent: 'start',
      alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen'>
        
          <Text className = 'text-2xl text-white'>{mensaje}...</Text>
          <View className = 'flex-1 flex-col items-center justify-center w-full'>
          <View className='items-center justify-center w-11/12 bg-neutral-700 rounded px-2 py-2 my-2'>
            <Text className = 'text-xl text-white py-3 text-center'>Usa nuestro sistema de IA para generar la rutina perfecta para ti</Text>
            <TouchableOpacity className = 'bg-sky-500 p-2 rounded'>
              <Text className = 'text-white text-lg'>Generar</Text>
            </TouchableOpacity>
          </View>
          <Text className = 'text-xl text-white pt-5 pb-3'>Prueba algunas rutinas preconstruidas..</Text>
          
            <TarjetaRutina/>
            <TarjetaRutina/>
            <TarjetaRutina/>
            <TarjetaRutina/>
          </View>
          
        
    </SafeAreaView>
    </ScrollView>
  )
}

export default pantallaBienvenida

const styles = StyleSheet.create({})