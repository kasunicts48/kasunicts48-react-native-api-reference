import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Audio } from 'react-native';
import abc from '../assets/abc.mp3'

export default function Api01({ navigation }) {

const [sound, setSound] = React.useState();

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

  function gotoHome(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Api 01</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={playSound}
        >
          <Text style={styles.buttonText}>Play Sound</Text>
        </TouchableOpacity>

        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#3ecfe8",
    borderColor: "#28b5ce",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginTop: 100
  },
  buttonText: {
    fontSize: 20,
    color: "#fd8b13"
  }
 
});
