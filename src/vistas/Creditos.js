import React, { useEffect, useState } from "react";
import Carrousel from "../componentes/Carrousel";
import { ImageBackground, View, Text, FlatList, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Boton from "../componentes/Boton";

export default function Creditos({ navigation }) {


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>


          <View style={styles.head}>
            <Text style={styles.texto}>
              Aplicación desarrollada por Bruno Ruffinengo.
            </Text>
          </View>
            


      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: '#000',
    flex: 1,
    
},

})