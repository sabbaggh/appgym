import * as React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView} from "react-native";
import {useFonts} from 'expo-font';
//import ContenedoPrinpal from './componentes/contenedorPrincipal'
import LogoPrincipal from './componentes/logoPrincipal';
import BotonesInicio from './componentes/botonesInicio';
import {createTable, crearTablaEjercicios, crearTablaRutinas, crearTablaRutinasEjercicios, insertarRutinasEjercicios, eliminarTabla} from './db';

export default function Index() {
  //Se crean todas las tablas necesarias al momento de iniciar la app, los datos ya se cargaron anteriormente
  React.useEffect(() =>{
    createTable();
    crearTablaRutinas();
    crearTablaEjercicios();
    crearTablaRutinasEjercicios();
  }, []);
  //Se carga la fuente que se va a usar en el logo
  const [fontsLoaded] = useFonts({
    Baba: require("../assets/fonts/BabaPro-Bold.ttf"),
  });

  if(!fontsLoaded) return null;
  //Se renderiza la pantalla
  return (
    <SafeAreaView style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center', backgroundColor: '#262626'}} >
      <LogoPrincipal/>
      <BotonesInicio/>
    </SafeAreaView>
  );
}
