import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    //Se cargan todas las pantallas iniciales
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="pantallaRegistro" options={{headerShown:false}}/>
      <Stack.Screen name="pantallaInicio" options={{headerShown:false}}/>
      <Stack.Screen name="tabs" options={{headerShown:false}}/>
      <Stack.Screen name="rutinaPreview" options={{headerShown:false}}/>
      <Stack.Screen name="hacerRutina" options={{headerShown:false}}/>
      <Stack.Screen name="evaluarRutina" options={{headerShown:false}}/>
    </Stack>
  );
}
