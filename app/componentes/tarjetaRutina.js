import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import TarjetaEjercicio from './tarjetaEjercicio'
import { Link, router, useRouter } from 'expo-router'

const tarjetaRutina = ({rutina}) => {
  //const router = useRouter();
  const componentesEjercicios = [];
  const ejerciciosArray = [];
  //console.log(rutina);
  rutina.forEach(ejercicio => {
    componentesEjercicios.push(<TarjetaEjercicio id={ejercicio.ejercicio_id} nombre = {ejercicio.nombre_espanol}/>)
    ejerciciosArray.push([ejercicio.ejercicio_id,ejercicio.nombre_espanol])
  });
  const manejarSeleccionRutina = () => {
    router.push({
      pathname: '../rutinaPreview',
      params: { ejercicios: JSON.stringify(ejerciciosArray), ruitnaId: rutina[0].rutina_id },
    });
  };
  return (
      <View className='w-11/12 bg-neutral-700 rounded px-3 py-4 my-2'>
        <Text className = 'text-xl text-white mb-2'>{rutina[0].rutina_nombre}</Text>
        <ScrollView horizontal={true}>
        <View className = 'w-full bg-stone-800 p-2 flex-row pr-0 rounded py-5'>
          {rutina.map((ejercicio, index) => (<TarjetaEjercicio key = {index} id={ejercicio.ejercicio_id} nombre = {ejercicio.nombre_espanol} />))}
        </View>
        </ScrollView>
        <Text className = 'text-white text-base my-2'>Nivel recomendado: {rutina[0].nivel_recomendado}</Text>
        <Text className = 'text-white text-base mb-2'>Descripcion: {rutina[0].descripcion}</Text>
        <View className = 'flex flex-row-reverse'>
          <TouchableOpacity className = 'bg-sky-500 w-2/6 p-3 mt-2 rounded-lg ml-' onPress={() => manejarSeleccionRutina()}>
              <Text className = 'text-white text-center'>Seleccionar</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default tarjetaRutina
