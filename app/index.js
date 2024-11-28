import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView} from "react-native";
import {useFonts} from 'expo-font';
//import ContenedoPrinpal from './componentes/contenedorPrincipal'
import LogoPrincipal from './componentes/logoPrincipal';
import BotonesInicio from './componentes/botonesInicio';
import {createTable} from './db';

export default function Index() {
  React.useEffect(() =>{
    createTable();
  }, []);
  const [fontsLoaded] = useFonts({
    Baba: require("../assets/fonts/BabaPro-Bold.ttf"),
  });

  if(!fontsLoaded) return null;
  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#262626'}} >
      <LogoPrincipal/>
      <BotonesInicio/>
    </SafeAreaView>
  );
}
