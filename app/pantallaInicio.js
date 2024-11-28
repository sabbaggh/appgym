import { StyleSheet, Text, View, SafeAreaView, TextInput, Touchable, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router'
import { inicioSesion } from './db';



const pantallaInicio = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState('');

  const manejarInicio = () => {
    if (!nombre || !password) {
      Alert.alert('Error', 'Por favor, llena todos los campos.');
      return;
    }
    else{
      inicioSesion(nombre,password,(success, error) =>{
        if(success){
          Alert.alert('Iniciaste sesion correctamente');
        }
        else{
          Alert.alert('Nombre de usuario o contrasena incorrectos', error);
        }
      });
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