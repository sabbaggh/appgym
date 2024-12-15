import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import TarjetaRutina from '../componentes/tarjetaRutina';
import {selectRutinas} from '../db';


const pantallaBienvenida = () => {
  //Se obtienen los parametros que vienen desde la pantalla de registro e inicio de sesion
  const { nombre, mensaje } = useLocalSearchParams();
  //Almacenamiento de las rutinas por medio de un query
  const [rutinas, setRutinas] = React.useState([]);
  //funcion para poner todas las rutinas en un array
  const obtenerEjercicios = async () => {
    const arrayRutinas = [];
    for (let i = 1; i < 7; i++) {
      arrayRutinas.push(await selectRutinas(i));
    }
    return arrayRutinas;
  };
  //se obtienen las rutinas
  React.useEffect(() => {
    const fetchRutinas = async () => {
      const rutinas = await obtenerEjercicios();
      setRutinas(rutinas);
    };
    fetchRutinas();
  }, []);


  return (
    <ScrollView className = 'bg-neutral-800'>
    <SafeAreaView style={{flex: 1,
      justifyContent: 'start',
      alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen'>
        
          <Text className = 'text-2xl text-white px-2'>{mensaje}</Text>
          <View className = 'flex-1 flex-col items-center justify-center w-full'>
            <View className='items-center justify-center w-11/12 bg-neutral-700 rounded px-2 py-24 my-2'>
              <Text className = 'text-xl text-white py-3 text-center'>Usa nuestro sistema de IA para generar la rutina perfecta para ti</Text>
              <TouchableOpacity className = 'bg-sky-500 p-2 rounded'>
                <Text className = 'text-white text-lg'>Generar</Text>
              </TouchableOpacity>
            </View>
            <Text className = 'text-xl text-white pt-5 pb-3 text-left w-full px-2'>Prueba algunas rutinas preconstruidas..</Text>
            {rutinas.map((rutina, index) => (<TarjetaRutina key = {index} rutina = {rutina}/>))}
          </View>
          
        
    </SafeAreaView>
    </ScrollView>
  )
}

export default pantallaBienvenida

const styles = StyleSheet.create({})