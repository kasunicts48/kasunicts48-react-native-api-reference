import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity  } from 'react-native';
import { Audio } from 'expo-av';
import * as Clipboard from 'expo-clipboard';
import abc from '../assets/abc.mp3'

export default function Home({ navigation }) {

  const [sound, setSound] = React.useState();
  const [copiedText, setCopiedText] = React.useState('');

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require(abc)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

   const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome My App
          <TouchableOpacity
          style={styles.button}
          onPress={playSound}
        >
          <Text style={styles.buttonText}>Play Sound</Text>
        </TouchableOpacity>
      </Text>

      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
  },
   button: {
    marginTop: 150,
    padding: 10,
    width: 200
    ,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonText: {
    color: "#FFF"
  },
  copiedText: {
    marginTop: 200,
    color: 'red',
  },
  
});


