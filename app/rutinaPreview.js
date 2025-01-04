import { StyleSheet, Text, View, ScrollView, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import images from '../assets/images/images';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React, { useState } from 'react';
import { router } from 'expo-router'

const rutinaPreview = () => {
  //Se extrae la matriz que contiene los datos de la rutina
  const {ejercicios, ruitnaId} = useLocalSearchParams();
  const ejerciciosArray = JSON.parse(ejercicios);
  //console.log(ejerciciosArray[0]);
  //Se le agrega a esa matriz una cantidad de series y repeticiones inicial
  const componentesEjer = [];
  let ejerciciosArrayConDatos = [];
  for(let i = 0; i < ejerciciosArray.length; i++){
    ejerciciosArrayConDatos.push(ejerciciosArray[i].concat([3,14]))
  }
  const [ejerciciosArrayConDatos2, setEjerciciosArrayConDatos] = useState(ejerciciosArrayConDatos);
  //Se crean las tarejtas de cada ejercicio perteneciente a la rutina que se selecciono indicando el numero de repeticiones correspondientes a cada ejercicio, el usuario podra modificar la cantidad de repeticiones y series para cada ejercicio
  for(let i = 0; i < ejerciciosArrayConDatos2.length; i++){
    //console.log(ejerciciosArrayConDatos2[i]);
    componentesEjer.push(<View key={i} className='flex-1 flex-col mb-5 w-full justify-center p-3 bg-neutral-700 rounded-xl'>
        <View className='flex-1 flex-row justify-between items-center mb-3'>
          <Image source={images[ejerciciosArrayConDatos2[i][0]]} className='w-2/6 h-36 object-scale-down rounded'/>
          <Text className='text-base text-left text-white w-4/6 text-lg ml-4'>{ejerciciosArrayConDatos2[i][1]}</Text>
        </View>
        <View className='flex-col'>
        
        
          <View className='w-full h-50 flex-1 flex-row justify-between items-center mb-3'>
            <View className='w-3/6'>
              <View className='h-15 flex-row justify-between items-center rounded-full border bg-white p-2 w-full'>
                <TouchableOpacity onPress={()=>disminuirSeries(i)}>
                  <FontAwesome name='minus' size={24} />
                </TouchableOpacity>
                <Text className='text-center'>Series</Text>
                <TouchableOpacity onPress={()=>aumentarSeries(i)}>
                  <FontAwesome name='plus' size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <View className='w-3/6'>
              <Text className='text-lg text-center text-white'>{ejerciciosArrayConDatos2[i][2]}</Text>
            </View>
          </View>
          <View className='w-full h-50 flex-1 flex-row justify-between items-center'>
            <View className='w-3/6'>
              <View className='h-15 flex-row justify-between items-center rounded-full border bg-white p-2 w-full'>
                <TouchableOpacity onPress={()=>disminuirRepeticiones(i)}>
                  <FontAwesome name='minus' size={24} />
                </TouchableOpacity>
                <Text className='text-center'>Repeticiones</Text>
                <TouchableOpacity onPress={()=>aumentarRepeticiones(i)}>
                  <FontAwesome name='plus' size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <View className='w-3/6'>
              <Text className='text-lg text-center text-white'>{ejerciciosArrayConDatos2[i][3]}</Text>
            </View>
          </View>
        </View>
      </View>)
  }

  //Funciones para manejar la cantidad de repeticiones o de sets ya sea que se aumenten o se disminuyan
  const aumentarRepeticiones = (index) => {
    let nuevosEjercicios = [...ejerciciosArrayConDatos2]; // Crear una copia del array
    nuevosEjercicios[index][3] += 1; // Modificar la copia
    setEjerciciosArrayConDatos(nuevosEjercicios); // Actualizar el estado
    //console.log(nuevosEjercicios); // Verificar en consola
  };
  const disminuirRepeticiones = (index) => {
    let nuevosEjercicios = [...ejerciciosArrayConDatos2]; // Crear una copia del array
    nuevosEjercicios[index][3] -= 1; // Modificar la copia
    setEjerciciosArrayConDatos(nuevosEjercicios); // Actualizar el estado
    //console.log(nuevosEjercicios); // Verificar en consola
  };
  const aumentarSeries = (index) => {
    let nuevosEjercicios = [...ejerciciosArrayConDatos2]; // Crear una copia del array
    nuevosEjercicios[index][2] += 1; // Modificar la copia
    setEjerciciosArrayConDatos(nuevosEjercicios); // Actualizar el estado
    //console.log(nuevosEjercicios); // Verificar en consola
  };
  const disminuirSeries = (index) => {
    let nuevosEjercicios = [...ejerciciosArrayConDatos2]; // Crear una copia del array
    nuevosEjercicios[index][2] -= 1; // Modificar la copia
    setEjerciciosArrayConDatos(nuevosEjercicios); // Actualizar el estado
    //console.log(nuevosEjercicios); // Verificar en consola
  };
  //Cuando se presion el boton para iniciar la rutina se mandan los parametros de la rutina a la pantalla hacerRutina
  const manejarBotonContinuar = () => {
      console.log(ejerciciosArrayConDatos2);
      router.push({
        pathname: './hacerRutina',
        params: { ejercicios: JSON.stringify(ejerciciosArrayConDatos2), ruitnaId: ruitnaId },
      });
    };


  
  return (
    <ScrollView className = 'bg-neutral-800'>
        <SafeAreaView style={{flex: 1,
          justifyContent: 'start',
          alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen'>
          {componentesEjer}
          <TouchableOpacity className = 'bg-sky-500 w-3/6 p-3 mt-2 rounded-lg ml-' onPress={manejarBotonContinuar}>
            <Text className = 'text-white text-center text-base'>Iniciar Rutina</Text>
          </TouchableOpacity>
      
        </SafeAreaView>
    </ScrollView>
  )
}

export default rutinaPreview
