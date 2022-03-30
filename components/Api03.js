import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function Api03({ navigation }) {

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  function round() { 

   } 

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
function gotoHome(){
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Api 03</Text>
      <Text style={styles.text}>Accelerometer</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: "#58c810",
    marginTop: 20,
    padding: 10,
    width: 100,
    textAlign: 'center',
    borderRadius: 10
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  }
 
});
