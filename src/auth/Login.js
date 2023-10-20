import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// export default function App() {
  const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked. Username:', username, 'Password:', password);
  };


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png' }}
        style={{ width: 100, height: 80, resizeMode: 'contain' }}
      />

      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Edit')} >
        <Text style={styles.loginButtonText}  >Sign In</Text>
      </TouchableOpacity>
      {/* <Text style={styles.footer}> Forgot Password ? </Text> */}
      <Text onPress={() => navigation.navigate('ForgotPassword')} >Forgot Password?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  loginButton: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#0079D0',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
  },

  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
    paddingTop: 8,
    align: 'left',


  },


  // fpText: {
  //   alignSelf: 'flex-end',
  //   color: '#B33771',
  //   fontSize: 18,
  //   fontWeight: '600',
  //   marginTop: 10,
  // },


});

export default Login;