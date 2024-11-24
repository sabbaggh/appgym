import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'

const pantallaRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#262626'}} >
      <Text className ='text-white text-3xl'>Registro</Text>
      <TextInput placeholder='Nombre de usuario' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={nombre} onChangeText={setNombre} placeholderTextColor="#888"/>
      <TextInput placeholder='Contraseña' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={password} onChangeText={setPassword}  secureTextEntry={true} placeholderTextColor="#888"/>
      <View className= 'flex flex-row w-10/12 justify-between items-center'>
        <TextInput placeholder='Peso (Kg)' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-40 my-2 px-2' value={peso} onChangeText={setPeso} keyboardType = 'numeric' placeholderTextColor="#888"/>
        <TextInput placeholder='Estatura (cm)' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-40 my-2 px-2' value={estatura} onChangeText={setEstatura} keyboardType = 'numeric' placeholderTextColor="#888"/>
      </View>
    </SafeAreaView>
  )
}

export default pantallaRegistro

const styles = StyleSheet.create({})