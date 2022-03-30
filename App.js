import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// You can import from local files
import Home from './components/Home';
import Login from './components/Login';
import Api01 from './components/Api01'
import Api02 from './components/Api02'
import Api03 from './components/Api03'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
      <Stack.Screen name="Login" options={{ title: 'Login Screen', headerMode: false  }} component={Login} />  
      <Stack.Screen name="Home" options={{ title: 'Logout'}} component=   {Home} />
      <Stack.Screen name="Api01" options={{ title: 'API 01' }} component={Api01} />
      <Stack.Screen name="Api02" options={{ title: 'API 02' }} component={Api02} />
      <Stack.Screen name="Api03" options={{ title: 'API 03' }} component={Api03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
