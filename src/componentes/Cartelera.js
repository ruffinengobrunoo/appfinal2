import { Text, StyleSheet, View, Button, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Boton from './Boton';

export default function Enlaces({navigation}) {
  
const poster = {uri: 'https://ar.pinterest.com/pin/15903404929270300/'}

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.poster}>
          <ImageBackground
          source={poster}
          resizeMode='center'
          >
            <Boton
            text="Ver más"
            press={() => navigation.navigate('')}></Boton>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }


const styles = StyleSheet.create({
  poster: {
    flex: 2,
        margin: 15,
        // alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'flex-start',
        // alignContent: 'flex-end',
        width: 350,
        height: 450,
        borderRadius: 25,
        padding: 25,
        backgroundColor: 'orange',
  }
})