import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text } from 'react-native';

import HomeScreen from './vistas/HomeScreen'
import LogIn from "./vistas/LogIn";
import SignIn from "./vistas/SignIn";
import prueba2 from "./vistas/Perfil";
import Creditos from "./vistas/Creditos";

import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Home':
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case 'Películas':
                        iconName = focused ? 'book' :'book-outline';
                        break;
                    case 'Perfil':
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        break;
                    case 'Guardado':
                        iconName = focused ? 'color-palette' : 'color-palette-outline';
                        break;
                        case 'Creditos':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                         default: 
                        iconName = 'help-outline'; 
                }

                return <Icon name={iconName} size={28} color={focused ? '#1C1F33' : '#404461'} />;
            },
            tabBarLabel: ({ focused }) => {
                return (
                    <Text style={{ color: focused ? '#1C1F33' : '#404461' }}> 
                        {route.name}
                    </Text>
                );
            },
            tabBarStyle: { 
                backgroundColor: '#A77BCA',
                height: 60, 
                paddingBottom: 3, 
                borderTopColor: 'transparent',
            },
            
        })}
    >
            <Tab.Screen name='Pefil' component={prueba2} options={{ headerShown: false }}/>
            <Tab.Screen name='Guardado' component={LogIn} options={{ headerShown: false }}/>
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Películas' component={SignIn} options={{ headerShown: false }}/>
            <Tab.Screen name='Creditos' component={Creditos} options={{ headerShown: false }}/>

        </Tab.Navigator>
    );
}