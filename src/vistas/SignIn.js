import { Text, StyleSheet, TextInput, View } from "react-native";
import { React } from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
// import { View } from "react-native-web";

import Boton from '../componentes/Boton'

export default function SignIn() {

const navigation = useNavigation();

// const Stack = createNativeStackNavigator();
  // const [nombre, setNombre] = useState('');
  // const [apellido, setApellido] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [text, onChangeText] = useState('');

  // const handleSubmit = async () => {
  //     if (!nombre || !apellido || !email || !password) {
  //         Alert.alert('Error', 'Por favor, completa todos los campos');
  //         return;
  //     }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.titulos}>
          <Text style={styles.upper}>Bienvenido.</Text>
          <Text style={styles.titulo}>Crear cuenta</Text>
        </View>{/* <Form></Form> */}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Nombre"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Apellido"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Usuario"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Correo Electrónico"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Contraseña"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Confirmar contraseña"
            placeholderTextColor={'#E3E4DB'}
            value={text}
          />
          <Boton
            text="Crear cuenta"
            press={() => navigation.navigate('')}
          />
        </View>

        <View style={styles.botones}>
          
          
            <Text style={styles.upper}>¿Ya tenés una cuenta? </Text>
            <Text style={styles.texto} onPress={() => navigation.navigate('')}>Ingresa acá</Text>
          
        </View>

      </SafeAreaView>
    </SafeAreaProvider>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  titulos:{
    flex: 1,
    // backgroundColor: 'green',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end'
  },
  form: {
    flex: 3,
    // backgroundColor: 'pink',
    justifyContent: 'center'
  },
  botones:{
    flex: 1,
    // backgroundColor: 'green',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 15
  },
  upper: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 400
  },
  texto: {
    color: '#F18805',
    fontSize: 18,
    fontWeight: 400
  },
  input: {
    color: '#E3E4DB',
    height: 40,
    width: 350,
    marginBottom: 9,
    marginTop: 9,
    borderBottomWidth: 1,
    borderColor: '#F18805',
    textAlign: 'left',
    fontSize: 18,
  },
  nav: {
    color: '#F18805',
    flexDirection: 'row'
  },
  titulo: {
    color: '#F18805',
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 30,
  },

})
