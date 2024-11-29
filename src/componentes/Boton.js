import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'


export default function Boton({ press, text = "example" }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.button}>
                    <Text style={styles.texto}
                    onPress={press}>{text}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#F18805',
        // padding: 5,
        borderRadius: 10,
        width: 125,
        height: 35,
        // alignItems: 'center',
        
        justifyContent: 'center',
        // marginTop: 20
    },
    texto: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})