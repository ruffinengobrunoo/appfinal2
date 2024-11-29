import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Image, Touchable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'


// import miTema from './Colores'
// import { NavigationContainer } from '@react-navigation/native';

export default function Carrousel({ press = '...' }) {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={press}>
          <View style={styles.foto}>
          
            
            

          </View>
    </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#881600',
    margin: 10,
    width: 200,
    height: 125,
    borderRadius: 15,
  }
})