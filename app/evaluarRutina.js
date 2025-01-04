import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { RadioButton } from 'react-native-paper';

const evaluarRutina = () => {
  const {mensaje, ruitnaId} = useLocalSearchParams();
  const [cansancio, setCansancio] = React.useState('1');
  const [dificultad, setDificultad] = React.useState('1');

  const terminarEvaluacionRegresarAMenu = () =>{
    console.log(cansancio);
    console.log(dificultad);
  }
  return (
    <SafeAreaView style={{flex: 1,
                  justifyContent: 'start',
                  alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen bg-neutral-800'>
      <View className='flex-col justify-center h-full'>
        <Text className='text-white text-lg text-center'>Completaste la rutina {ruitnaId}</Text>
        <Text className='text-white text-lg'>Ingresa tu nivel de cansancio que sientes en una escala de 1-5</Text>
        <View className='flex-col justify-center items-center'>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="1"
              status={ cansancio === '1' ? 'checked' : 'unchecked' }
              onPress={() => setCansancio('1')}
            />
            <Text className='text-white text-base'>1(Muy poco cansado)</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="2"
              status={ cansancio === '2' ? 'checked' : 'unchecked' }
              onPress={() => setCansancio('2')}
            />
            <Text className='text-white text-base'>2</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="3"
              status={ cansancio === '3' ? 'checked' : 'unchecked' }
              onPress={() => setCansancio('3')}
            />
            <Text className='text-white text-base'>3</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="4"
              status={ cansancio === '4' ? 'checked' : 'unchecked' }
              onPress={() => setCansancio('4')}
            />
            <Text className='text-white text-base'>4</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="5"
              status={ cansancio === '5' ? 'checked' : 'unchecked' }
              onPress={() => setCansancio('5')}
            />
            <Text className='text-white text-base'>5 (Muy cansado)</Text>
          </View>
        </View>
        <Text className='text-white text-lg mt-5'>Ingresa que tan dificil sentiste la rutina</Text>
        <View className='flex-col justify-center items-center'>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="1"
              status={ dificultad === '1' ? 'checked' : 'unchecked' }
              onPress={() => setDificultad('1')}
            />
            <Text className='text-white text-base'>1 (Muy poco dificil)</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="2"
              status={ dificultad === '2' ? 'checked' : 'unchecked' }
              onPress={() => setDificultad('2')}
            />
            <Text className='text-white text-base'>2</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="3"
              status={ dificultad === '3' ? 'checked' : 'unchecked' }
              onPress={() => setDificultad('3')}
            />
            <Text className='text-white text-base'>3</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="4"
              status={ dificultad === '4' ? 'checked' : 'unchecked' }
              onPress={() => setDificultad('4')}
            />
            <Text className='text-white text-base'>4</Text>
          </View>
          <View className='flex-row items-center justify-start w-full h-8'>
            <RadioButton
              value="5"
              status={ dificultad === '5' ? 'checked' : 'unchecked' }
              onPress={() => setDificultad('5')}
            />
            <Text className='text-white text-base'>5 (Muy dificil)</Text>
          </View>
        </View>
        <View className='items-center w-full justify-center mt-3'>
          <TouchableOpacity className = 'bg-sky-500 w-3/6 p-3 mt-2 rounded-lg' onPress={() => terminarEvaluacionRegresarAMenu()}>
            <Text className = 'text-white text-center text-base'>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default evaluarRutina