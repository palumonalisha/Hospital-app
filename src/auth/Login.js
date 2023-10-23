import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { cloneDeep } from 'lodash/lang'
// import authStyle from '../authStyle';

function Login({ navigation }) {
  const [signInReg, setSignInReg] = useState({
    username: '',
    password: ''

  })

  const [error, setError] = useState({
    username: '',
    password: ''

  })

  const handleSignIn = () => {
    const signInError = cloneDeep(error)
    if (signInReg.username.trim() === '') {
      signInError.username = 'this field is required'
    }
    if (signInReg.password.trim() === '') {
      signInError.username = 'this field is required'
    }
    setError(signInError)
    console.log('signInReg cliked.Usernam:', username, 'Password:', password)

  };

  return (
    <View style={authStyle.container}>
      <Text style={authStyle.header}>Sign In</Text>

      {error && <Text style={authStyle.error}>{error}</Text>}
      <TextInput
        style={authStyle.input}
        placeholder="Username"
        onChangeText={(value) => {
          const UpdatedSignIn = cloneDeep(signInReg)
          UpdatedSignIn.username = value
          setSignInReg(UpdatedSignIn)
        }}
        value={signInReg.username}
      />

      {error && <Text style={authStyle.error}>{error} </Text>}
      <TextInput
        style={authStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => {
          const UpdatedSignIn = cloneDeep(signInReg)
          UpdatedSignIn.password = value
          setSignInReg(UpdatedSignIn)
        }}
        value={signInReg.password}
      />

      <TouchableOpacity style={authStyle.loginButton} onPress={() => navigation.navigate('Edit')} >
        <Text style={authStyle.loginButtonText} onPress={handleSignIn}  >Sign In</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.navigate('ForgotPassword')} style={authStyle.footer}>Forgot Password?</Text>
    </View>
  );
}

const authStyle = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
  },
  input: {
    // width: '80%',
    width: 260,
    height: 40,
    borderWidth: 1,
    Color: '#C4C4C4',
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  loginButton: {
    width: 260,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#0079D0',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#BDBDBD',
  },

  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'Semibold',
    marginTop: 4,
  },

  error: {
    color: 'red',
  },

  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    paddingTop: 10,
    marginRight: 120,

  }

});



export default Login;