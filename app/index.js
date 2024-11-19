import * as React from 'react';
import { Text, View, TouchableOpacity} from "react-native";
import * as FileSystem from 'expo-file-system';
import {Asset} from 'expo-asset';
import {useFonts} from 'expo-font'
import ContenedoPrinpal from './componentes/contenedorPrincipal'
import LogoPrincipal from './componentes/logoPrincipal'
import BotonesInicio from './componentes/botonesInicio'

const loadDataBase = async()=>{
  const dbName = 'base.db';
  const dbAsset = require('../assets/base.db');
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if(!fileInfo.exists){
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      {intermediates:true}
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
};

export default function Index() {
  const [dbLoaded, setDbLoaded] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Baba: require("../assets/fonts/BabaPro-Bold.ttf"),
  });
  
  React.useEffect(() =>{
    loadDataBase()
      .then(() => setDbLoaded(true))
      .catch((e) => console.error(e));

  }, []);

  if(!fontsLoaded) return null;
  if(!dbLoaded) return <Text>Cargando...</Text>;
  return (
    <ContenedoPrinpal>
      <LogoPrincipal/>
      <BotonesInicio/>
    </ContenedoPrinpal>
  );
}
