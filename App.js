import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LogIn from './src/vistas/LogIn';
import SignIn from './src/vistas/SignIn';
import HomeScreen from './src/vistas/prueba';
import Creditos from './src/vistas/prueba';
import prueba2 from './src/vistas/Perfil';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomTab } from './src/navigation/BottomTab';
// import Icon from 'react-native-vector-icons/MaterialIcons';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// const ProfileStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="ProfileScreen" component={SignIn} />
//       <Stack.Screen name="EditProfileScreen" component={LogIn} />
//     </Stack.Navigator>
//   );
// };

// const Inicio = () => {
//   return (
//     <Tab.Navigator
//       activeColor="#f0edf6"
//       inactiveColor="#f5e1ce"
//       barStyle={{ backgroundColor: '#A67B58' }}
//     >
//       <Tab.Screen
//         name="Inicio"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="No se"
//         component={prueba2}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="star" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Lista"
//         component={ListaScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="list" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Perfil"
//         component={ProfileStack}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="person" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  return (
    // <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Prueba" component={prueba2} />
          <Stack.Screen name="Creditos" component={Creditos} />
          {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}

          {/* <Stack.Screen name="Perfil" component={Perfil} /> */}
          {/* <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen name="ListaScreen" component={ListaScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
          <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
          <Stack.Screen name="AdminUsersScreen" component={AdminUsersScreen} /> */}
        
        </Stack.Navigator>
      </NavigationContainer>
    // </FavoritesProvider>
  );
}