import { StyleSheet, Text, View, SafeAreaView, TextInput, Touchable, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router'
import { anadirUsuario } from './db';



const pantallaRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [objSeleccionado, setobjSeleccionado] = useState('');
  const [nivelSeleccionado, setnivelSeleccionado] = useState('');

  const manejarRegistro = () => {
    if (!nombre || !password || !peso || !estatura || !objSeleccionado || !nivelSeleccionado) {
      Alert.alert('Error', 'Por favor, llena todos los campos.');
      return;
    }
    else if(peso > 500){
      Alert.alert('Error', 'Tu peso no puede superar los 500 Kilogramos');
      return;
    }
    else if( estatura > 250){
      Alert.alert('Error', 'Tu estatura no puede pasar de 250 centimetros');
      return;
    }
    else{
      anadirUsuario(nombre,password,parseInt(estatura),parseInt(peso),objSeleccionado,nivelSeleccionado,(success, error) =>{
        if(success){
          Alert.alert('Registro Exitoso', `Se registro correctamente a ${nombre} en la base de datos`);
        }
        else{
          Alert.alert('Hubo un error al agregar el usuario:', error);
        }
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#262626'}} >
      <Text className ='text-white text-3xl text-start'>Registro</Text>
      <TextInput placeholder='Nombre de usuario' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={nombre} onChangeText={setNombre} placeholderTextColor="#888"/>
      <TextInput placeholder='Contraseña' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-10/12 my-2 px-2' value={password} onChangeText={setPassword}  secureTextEntry={true} placeholderTextColor="#888"/>
      <View className= 'flex flex-row w-10/12 justify-between items-center'>
        <TextInput placeholder='Peso (Kg)' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-40 my-2 px-2' value={peso} onChangeText={setPeso} keyboardType = 'numeric' placeholderTextColor="#888"/>
        <TextInput placeholder='Estatura (cm)' className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-40 my-2 px-2' value={estatura} onChangeText={setEstatura} keyboardType = 'numeric' placeholderTextColor="#888"/>
      </View>
      <View className = 'w-10/12 rounded-xl border-neutral-500 border-2 my-2 p-0'>
        <Picker selectedValue={objSeleccionado} onValueChange={(itemValue) => setobjSeleccionado(itemValue)} className= "w-10/12" style = {{width:'100%', color: 'white', fontSize:16,  padding:0}} itemStyle={{ backgroundColor: "grey", color: "blue" }}>
          <Picker.Item label="Selecciona tu objetivo..." value="" />
          <Picker.Item label="Ganar masa muscular" value="ganarMasa"/>
          <Picker.Item label="Bajar de peso" value="bajarPeso"/>
          <Picker.Item label="Definir" value="definir"/>
        </Picker>
      </View>
      <View className = 'w-10/12 rounded-xl border-neutral-500 border-2 my-2 p-0'>
        <Picker selectedValue={nivelSeleccionado} onValueChange={(itemValue) => setnivelSeleccionado(itemValue)} className= "w-10/12" style = {{width:'100%', color: 'white', fontSize:16,  padding:0}} itemStyle={{ backgroundColor: "grey", color: "blue" }}>
          <Picker.Item label="Selecciona tu nivel..." value="" />
          <Picker.Item label="Principiante" value="principiante"/>
          <Picker.Item label="Medio" value="medio"/>
          <Picker.Item label="Experto" value="experto"/>
        </Picker>
      </View>
      <View className= 'flex flex-row w-10/12 justify-between items-center mt-16'>
        <TouchableOpacity placeholder='Peso (Kg)' className='bg-neutral-500 py-3 px-3 rounded-xl w-40'>
          <Link href="/index" className='p-0 m-0'>
            <Text className='text-xl text-white text-center'>Volver</Text>
          </Link >
        </TouchableOpacity>
        <TouchableOpacity className='bg-sky-500 py-3 px-3 rounded-xl w-40' onPress={manejarRegistro}>
          <Text className='text-xl text-white text-center'>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default pantallaRegistro

const styles = StyleSheet.create({})