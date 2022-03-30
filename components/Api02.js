import * as React from 'react';
import { Text, View, StyleSheet, Image, Clipboard, Button, TouchableOpacity } from 'react-native';

export default function Api02({ navigation }) {

  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  function gotoHome(){
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Api 02</Text>
      <View>
      <View style={styles.container}>
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      </View>
      <View style={styles.container}>
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
      </View>
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
  heading: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
