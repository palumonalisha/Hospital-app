import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import authStyle from './src/Styles/authStyle';

// export default function App() {
  // const App = () => {
// function login({ navigation }) {s
// const Login = ({ navigation }) => {
  
function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked. Username:', username, 'Password:', password);
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

      <TouchableOpacity style={authStyle.loginButton} onPress={() => navigation.navigate('Edit')} >
        <Text style={authStyle.loginButtonText}  >Sign In</Text>
      </TouchableOpacity>
      {/* <Text style={styles.footer}> Forgot Password ? </Text> */}
      <Text onPress={() => navigation.navigate('ForgotPassword')} >Forgot Password?</Text>

    </View>
  );
}



export default Login;