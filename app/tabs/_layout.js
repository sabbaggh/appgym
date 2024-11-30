import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="pantallaBienvenida" options={{headerShown:false}}/>
      <Tabs.Screen name="perfil" options={{headerShown:false}}/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})