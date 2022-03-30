import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity  } from 'react-native';
import { Audio } from 'expo-av';
import * as Clipboard from 'expo-clipboard';
import abc from '../assets/abc.mp3'
import Api01 from './Api01'
import Api02 from './Api02'
import Api03 from './Api03'
const buttons = ["API 01","API 02", "API 03"];

export default function Home({ navigation }) {
 
 function changeScreenAPI01(){
  navigation.navigate('Api01')
 }

  function changeScreenAPI02(){
  navigation.navigate('Api02')
 }

   function changeScreenAPI03(){
  navigation.navigate('Api03')
 }

  return (
    <View style={styles.container}>
    <Text style={styles.headding}>Welcome to my API App!</Text>
     <TouchableOpacity
        style={styles.button}
        onPress={changeScreenAPI01}
      >
      <Text style={styles.buttonText}>API 01</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={changeScreenAPI02}
      >
      <Text style={styles.buttonText}>API 02</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={changeScreenAPI03}
      >
      <Text style={styles.buttonText}>API 03</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 100,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 200,
  },
   buttonText: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: 'center'
  },
  headding : {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
  
});
