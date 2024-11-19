import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'


const logoPrincipal = () => {
    const [fontsLoaded] = useFonts({
        Baba: require("../../assets/fonts/BabaPro-Bold.ttf"),
    });
    if(!fontsLoaded) return null;
  return (
    <View className = 'flex-1 items-center justify-center pb-18'>
      <Image source={require('../../assets/images/logo.png')}/>
      <View className='flex flex-row justify-center content-center'>
        <Text style = {{fontFamily:'Baba'}} className='text-5xl text-zinc-50'>SIGMA</Text>
        <Text style = {{fontFamily:'Baba'}} className='text-5xl text-sky-400'>PACK</Text>
      </View>
    </View>
  )
}

export default logoPrincipal;