import * as React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity, TextInput, Image } from 'react-native';

export default function Login({navigation}) {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
function checkValidation(){
  if(username == "kasun" && password == "123"){
    navigation.navigate('Home')
    setUsername("")
    setPassword("")
  }else{
    // alert("Password or Username are Invalid")
    console.log("Password or Username are Invalid")
  }
  
}

  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={require('../assets/logo2.png')} />
       <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={username}
         placeholder="Username"
      />
       <TextInput
        style={styles.input}
        onChangeText={newText => setPassword(newText)}
        value={password}
         placeholder="Password"
         secureTextEntry={true}
      />
        <TouchableOpacity
          style={styles.button}
          onPress={checkValidation}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#fff"
  },
  button: {
    padding: 10,
    width: 100,
    backgroundColor: '#6c3483',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 20,
    borderRadius: 20,
    borderColor : "#6c3483"

  },
  logo: {
    height: 100,
    width: 250,
    marginBottom: 50,
    marginTop: 50
  }
});
