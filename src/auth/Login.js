import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Image } from 'react-native';
// import authStyle from './src/Styles/authStyle';

// export default function App() {
  // const App = () => {
// const Login = ({ navigation }) => {
  
function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {

    if (username.trim() === '') {
      setError('This field is required');
    } 
    else {
      // Perform the submission logic here
    }
    
    if (password.trim() === '') {
      setError('This field is required');
    } 
    else {
      // Perform the submission logic here
    }
  };

  

  return (
    <View style={authStyle.container}>
      <Image
        // source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png' }}
        // style={{ width: 100, height: 80, resizeMode: 'contain' }}
      />

      <Text style={authStyle.header}>Sign In</Text>
      <TextInput
        style={authStyle.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={authStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      {error && <Text style={authStyle.error}>{error}</Text>}

      <TouchableOpacity style={authStyle.loginButton} onPress={() => navigation.navigate('Edit')} >
        <Text style={authStyle.loginButtonText} onPress={handleSignIn}  >Sign In</Text>
      </TouchableOpacity>
      {/* <Text style={styles.footer}> Forgot Password ? </Text> */}
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
    backgroundColor:'white'
  },
  header: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
  },
  input: {
    // width: '80%',
    width:260,
    height: 40,
    borderWidth: 1,
    Color: '#C4C4C4',
    borderColor:'#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  loginButton: {
    width:260,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#0079D0',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor:'#BDBDBD',
  },

  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'Semibold',
    marginTop:4, 
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