import React from "react";
// import {  useState} from "react";
import Carrousel from "../componentes/Carrousel";
import { ImageBackground, View, Text, FlatList, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Boton from "../componentes/Boton";

export default function HomeScreen({ navigation }) {

  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWI4NmE2MTAxMjEwNDQ2NGE2MzdkODkxMWMzNDJkOCIsIm5iZiI6MTczMjg5NDIzOC45MTA3Nzk1LCJzdWIiOiI2NzQwNDAxNzVjYWMwNDFjZmFlMjc2NTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.15T54Jhc1Wt_E7-R085r9OJQo_DZGXljbV84aQQmFWU'
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

  const MOVIE = [
    {
      title: 'Category 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
    {
      title: 'Category 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
  ];

  const RECOM = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 1' },
    { id: '3', title: 'Item 1' },
    { id: '4', title: 'Item 1' },
  ];
  const renderItem = ({ item }) => (
    <Carrousel press={() => navigation.navigate('..')} />
  )


  const poster = { uri: 'https://ar.pinterest.com/pin/15903404929270300/' }

  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <ScrollView style={styles.container}>

          <View style={styles.head}>
            <ImageBackground source={poster} resizeMode='cover'>
              <Boton
                text="Ver más"
                press={() => navigation.navigate('')} />
            </ImageBackground>


          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Categoría</Text>

            <FlatList
              style={styles.scroll}
              horizontal={true}
              data={RECOM}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />

          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Categoría</Text>
            <FlatList
              style={styles.scroll}
              horizontal={true}
              data={RECOM}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.box} >
            <Text style={styles.titulo}>Categoría</Text>
            <FlatList
              style={styles.scroll}
              horizontal={true}
              data={RECOM}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>

          <View style={styles.box}>
            <Text style={styles.titulo}>Categoría</Text>
            <FlatList
              style={styles.scroll}
              horizontal={true}
              data={RECOM}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  head: {
    flex: 2,
    margin: 15,
    // alignContent: 'center',
    // alignSelf: 'center',
    alignItems: 'flex-start',
    // alignContent: 'flex-end',
    width: 350,
    height: 450,
    borderRadius: 25,
    padding: 25,
    backgroundColor: 'orange',
  },

  box: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
    margin: 10,
    paddingTop: 20,
    textAlign: 'left',
  },
  scroll: {
    flex: 1,
    windowSize: 3,
  }
})