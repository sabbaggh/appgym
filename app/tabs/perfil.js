import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { actualizarDatos } from '../db';

const perfil = () => {
  //Variable para comprobar si se esta en el modo de edicion de datos o no
  const [editando, setEditando] = useState(false);
  //Variables para almacenar los datos que puede editar el usuario
  const [altura, setAltura] = useState(String(global.usuario.altura));
  const [peso, setPeso] = useState(String(global.usuario.peso));
  const [objetivo, setObjetivo] = useState(String(global.usuario.objetivo));
  const [nivel, setNivel] = useState(String(global.usuario.nivel));
  //Variable para mostrar los datos en manera normal o en modo de edicion, se usa casi lo mismo que en el registro
  let componentesInfo = editando ?
    <View>
      <TouchableOpacity className='mb-2' onPress={() => finalizarEditado()}>
        <Text className='text-sky-500 text-lg underline'>Guardar Datos</Text>
      </TouchableOpacity>
      <Text className='text-white text-xl px-3 pt-2 border-neutral-500 border-t-2'>Nivel</Text>
      <View className = 'w-full rounded-xl border-neutral-500 border-2 my-2 p-0'>
        <Picker selectedValue={nivel} onValueChange={(itemValue) => setNivel(itemValue)} className= "w-full" style = {{width:'100%', color: 'white', fontSize:16,  padding:0}} itemStyle={{ backgroundColor: "grey", color: "blue" }}>
          <Picker.Item label="Principiante" value="principiante"/>
          <Picker.Item label="Medio" value="medio"/>
          <Picker.Item label="Experto" value="experto"/>
        </Picker>
      </View>
      <Text className='text-white text-xl px-3 pt-2 border-neutral-500 border-t-2'>Objetivo</Text>
      <View className = 'w-full rounded-xl border-neutral-500 border-2 my-2 p-0'>
        <Picker selectedValue={objetivo} onValueChange={(itemValue) => setObjetivo(itemValue)} className= "w-full" style = {{width:'100%', color: 'white', fontSize:16,  padding:0}} itemStyle={{ backgroundColor: "grey", color: "blue" }}>
          <Picker.Item label="Ganar masa muscular" value="ganarMasa"/>
          <Picker.Item label="Bajar de peso" value="bajarPeso"/>
          <Picker.Item label="Definir" value="definir"/>
        </Picker>
      </View>
      <Text className='text-white text-xl px-3 pt-2 border-neutral-500 border-t-2'>Estatura</Text>
      <TextInput placeholder={altura} className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-full my-2 px-2' value={altura} onChangeText={setAltura} keyboardType = 'numeric' placeholderTextColor="#888"/>
      <Text className='text-white text-xl px-3 pt-2 border-neutral-500 border-t-2'>Peso</Text>
      <TextInput placeholder={peso} className = 'text-white text-base rounded-xl border-neutral-500 border-2 w-full my-2 px-2' value={peso} onChangeText={setPeso} keyboardType = 'numeric' placeholderTextColor="#888"/>
      <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Dificultad Promedio: {global.usuario.dPromedio}</Text>
      <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Cansancio Promedio: {global.usuario.cPromedio}</Text>
      <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Tiempo promedio para completar rutinas: {global.usuario.tPromedio}</Text>
      
      <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Rutinas Completadas: {global.usuario.rCompletadas}</Text>
    </View>:
    <View>
    <TouchableOpacity className='mb-2' onPress={() => finalizarEditado()}>
      <Text className='text-sky-500 text-lg underline'>Editar Datos</Text>
    </TouchableOpacity>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Nivel: {global.usuario.nivel}</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Objetivo: {global.usuario.objetivo}</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Altura: {global.usuario.altura} cm</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Peso: {global.usuario.peso} Kg</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Dificultad Promedio: {global.usuario.dPromedio}</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Cansancio Promedio: {global.usuario.cPromedio}</Text>
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Tiempo promedio para completar rutinas: {global.usuario.tPromedio} segundos</Text>
    
    <Text className='text-white text-xl p-3 border-neutral-500 border-t-2'>Rutinas Completadas: {global.usuario.rCompletadas}</Text>
  </View>
  //Funcion para actualizar los datos una vez el usuario termina de editar los datos y le da click en guardar datos
  const finalizarEditado = () =>{
    if(editando){
      //Se comprueba que no haya datos vacios, que la estatura y peso este dentro de los valores razonables y que los datos no sean iguales a como se tenian antes
      if(!altura || !peso || !objetivo || !nivel){
        Alert.alert('Error', 'No se pueden dejar campos vacios');
        return;
      }
      else if(peso > 500){
        Alert.alert('Error', 'Tu peso no puede superar los 500 Kilogramos');
        return;
      }
      else if( altura > 250){
        Alert.alert('Error', 'Tu estatura no puede pasar de 250 centimetros');
        return;
      }
      else if(altura == global.usuario.altura && peso == global.usuario.peso && objetivo == global.usuario.objetivo && nivel == global.usuario.nivel){
        console.log('No habia nada por actualizar');
        setEditando(!editando);
      }
      else{
        actualizarDatos(global.usuario.nombre,parseInt(altura),parseInt(peso),objetivo,nivel,(success, error) => {
          if(success){
            global.usuario.altura = altura;
            global.usuario.peso = peso;
            global.usuario.objetivo = objetivo;
            global.usuario.nivel = nivel;
            console.log('Se cambiaron datos');
            Alert.alert('Confirmacion', 'Se actualizaron los datos correctamente');
            setEditando(!editando);
          }
          else{
            Alert.alert('Ocurrio un error al intentar actualizar los datos. Intentalo de nuevo', error);
            return;
          }
        })
        
      }
      
    }
    else{
      setEditando(!editando)
    }
  }
   
  return (
    <SafeAreaView style={{flex: 1,
                  justifyContent: 'start',
                  alignItems: 'start', backgroundColor: '#262626'}} className = 'py-3 px-2 w-screen bg-neutral-800'>
      <ScrollView>
        <View className='flex-1 flex-col'>
          <View className='flex flex-row w-full items-center justify-center h-48'>
            <FontAwesome name='user-circle-o' size={120} color='#FFF' className='w-2/5' />
            <Text className='text-white text-3xl w-3/5 px-5'>{global.usuario.nombre}</Text>
          </View>
          {componentesInfo}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default perfil
