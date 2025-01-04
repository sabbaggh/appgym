import { StyleSheet, Text, View, SafeAreaView, TextInput, Touchable, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import { inicioSesion } from './db';



const pantallaInicio = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleInicioSesion = async (nombre, password) => {
    try {
      const resultado = await inicioSesion(nombre, password);
      
      if (resultado.length > 0) {
        global.usuario = {
          'nombre': nombre,
          'nivel': resultado[0].nivel,
          'altura': resultado[0].altura,
          'objetivo': resultado[0].objetivo,
          'peso': resultado[0].peso,
          'rCompletadas': resultado[0].rCompletadas,
          'cPromedio': resultado[0].cPromedio,
          'dPromedio': resultado[0].dPromedio,
          'tPromedio': resultado[0].tPromedio
        };
        router.push({
          pathname: '/tabs/pantallaBienvenida',
          params: { nombre, mensaje: `Bienvenido de vuelta, ${nombre}` },
        });
      } else {
        Alert.alert('Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión');
      console.error(error);
    }
  };

  const manejarInicio = () => {
    if (!nombre || !password) {
      Alert.alert('Error', 'Por favor, llena todos los campos.');
      return;
    }
    else{
      handleInicioSesion(nombre, password);
    }
  };

  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#262626'}} >
      <Text className ='text-white text-3xl text-start'>Inicia sesion</Text>
      <TextInput placeholder='Nombre de usuario' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={nombre} onChangeText={setNombre} placeholderTextColor="#888"/>
      <TextInput placeholder='Contraseña' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={password} onChangeText={setPassword}  secureTextEntry={true} placeholderTextColor="#888"/>
      <View className= 'flex flex-row w-10/12 justify-between items-center mt-16'>
        <TouchableOpacity placeholder='Peso (Kg)' className='bg-neutral-500 py-3 px-3 rounded-xl w-40'>
          <Link href="/index" className='p-0 m-0'>
            <Text className='text-xl text-white text-center'>Volver</Text>
          </Link >
        </TouchableOpacity>
        <TouchableOpacity className='bg-sky-500 py-3 px-3 rounded-xl w-40' onPress={manejarInicio}>
          <Text className='text-xl text-white text-center'>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default pantallaInicio

const styles = StyleSheet.create({})