import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';




// import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';




const LoginS = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
   
};
  return (


<ScrollView showsVerticalScrollIndicator={true} >
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
    {/* <LinearGradient
      colors={['#fff', '#fff', '#fff']}
      style={styles.container}
    > */}
 <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.loginText}>Sign in to continu</Text>
      <TextInput
        placeholder='Email Address'
        placeholderTextColor='#808e9b'
        style={styles.input}
        autoCorrect={true}
        autoCompleteType='email'
        keyboardType='email-address'
        textContentType='emailAddress'
        value={email}
        onChangeText={setEmail}
      />


      <TextInput
        placeholder='Password'
        placeholderTextColor='#808e9b'
        style={styles.input}
        secureTextEntry={true}
        textContentType='password'
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.fpText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}  onPress={() => navigation.navigate('Edit')}>Login</Text>
      </TouchableOpacity>
      <View style={styles.loginWithBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name='google' type='font-awesome' size={30} color='#808e9b' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon
            name='facebook-square'
            type='font-awesome'
            size={30}
            color='#808e9b'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name='apple' type='font-awesome' size={30} color='#808e9b' />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpTextView}>
        <Text style={styles.signUpText}>I'm a New User .</Text>
        <TouchableOpacity>
          <Text style={[styles.signUpText, { color: '#B53471' }]}  onPress={() => navigation.navigate('SignupS')}>
            {'  Signup'}
          </Text>
        </TouchableOpacity>
      </View>
    {/* </LinearGradient> */}
  </TouchableWithoutFeedback>


  </ScrollView>


 
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
   
padding:100,
    paddingHorizontal: 30,
 
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#5352ed',
    alignSelf: 'center',
  },
  loginText: {
    color: '#111',
    fontSize: 18,
   
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#eff',
    borderRadius: 6,
    marginTop: 10,
    borderColor:'#5352ed',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
   
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#B33771',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
},
loginWithBar: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 50,
},
iconButton: {
  backgroundColor: '#aff',
  padding: 14,
  marginHorizontal: 10,
  borderRadius: 100,
  borderColor:'#5352ed',
  borderWidth: 1,
},
signUpTextView: {
  marginTop: 40,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
},
signUpText: {
  color: '#808e9b',
  fontSize: 20,
  fontWeight: '500',
},
});


export default Login2;
