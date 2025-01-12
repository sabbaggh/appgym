import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import React, { useState, useEffect, useRef } from 'react';
import images from '../assets/images/images';
import { useLocalSearchParams } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { router } from 'expo-router'

const hacerRutina = () => {
    const {ejercicios, ruitnaId} = useLocalSearchParams();
    const [time, setTime] = useState(0); // Tiempo en segundos
    const [isRunning, setIsRunning] = useState(true); // Estado del cronómetro
    const intervalRef = useRef(null); // Referencia para el intervalo
    // Iniciar el cronómetro automáticamente al montar el componente
    useEffect(() => {
        if (isRunning) {
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1); // Incrementa el tiempo cada segundo
        }, 1000);
        }

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalRef.current);
    }, [isRunning]); // Dependencia: isRunning
    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1); // Incrementa el tiempo cada segundo
            }, 1000);
        }
    };

    // Función para detener el cronómetro
    const stopStopwatch = () => {
        if (isRunning) {
        clearInterval(intervalRef.current); // Detiene el intervalo
        setIsRunning(false);
        }
    };
     // Formatear el tiempo en formato HH:MM:SS
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const pad = (num) => (num < 10 ? `0${num}` : num);

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };
    // Limpiar el intervalo cuando el componente se desmonte
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    //console.log(ejercicios);
    const ejerciciosArray = JSON.parse(ejercicios);
    const [imagen,setImagen] = useState(0);
    const [pausa,setPausa] = useState('pause');
    const [final, setFinal] = useState('step-forward');
    const siguienteEjercicio = (imagen) => {
        if(imagen+1 < ejerciciosArray.length){
            setImagen(imagen+1);
            if(imagen+1 == ejerciciosArray.length-1){
                setFinal('check');
            }
        }
        else if(imagen+1 > ejerciciosArray.length-1){
            router.push({
                pathname: './evaluarRutina',
                params: { tiempo: time, ruitnaId: ruitnaId, ejercicios: JSON.stringify(ejerciciosArray) },
            });
        }
    }
    const anteriorEjercicio = (imagen) => {
        if(imagen-1 >= 0){
            setImagen(imagen-1);
            setFinal('step-forward');
        }
    }

    const pausarRutina = (pausa) => {
        if(pausa == 'pause'){
            stopStopwatch();
            setPausa('play');
            
        }
        else{
            startStopwatch();
            setPausa('pause');
            
        }
    }
  return (
    <SafeAreaView style={{flex: 1,
              justifyContent: 'start',
              alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen bg-neutral-800'>
      <View className='flex-1 flex-col justify-between align-center p-4'>
        <View className='flex flex-row h-1/6 justify-center items-center'>
            <Text className='text-2xl text-white'>{formatTime(time)}</Text>
        </View>
        <View className='flex flex-col h-3/5 justify-between items-center '>
            <Text className='w-full text-white text-lg text-center'>{ejerciciosArray[imagen][1]}</Text>
            <Image source={images[ejerciciosArray[imagen][0]]} className='w-full h-5/6 object-scale-down rounded'/>
            <Text className='w-full text-white text-lg text-center'>Sets: {ejerciciosArray[imagen][2]} Reps: {ejerciciosArray[imagen][3]}</Text>
        </View>
        <View className='flex flex-row h-1/5 justify-center items-center py-5 space-x-3.5'>
            <TouchableOpacity className='w-20 h-20 bg-white rounded-full justify-center items-center' onPress={()=>anteriorEjercicio(imagen)}>
                <FontAwesome name='step-backward' size={30} />
            </TouchableOpacity>
            <TouchableOpacity className='w-24 h-24 bg-white rounded-full justify-center items-center' onPress={() => pausarRutina(pausa)}>
                <FontAwesome name={pausa} size={36} />
            </TouchableOpacity>
            <TouchableOpacity className='w-20 h-20 bg-white rounded-full justify-center items-center' onPress={()=>siguienteEjercicio(imagen)}>
                <FontAwesome name={final} size={30} />
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default hacerRutina