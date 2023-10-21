import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
// import FPStyles from './src/FPStyles/FPStyles';

// export default function App() {
// const ForgotPassword = ({ navigation }) => {

function ForgotPassword({ navigation }) {
    const [EmailAddress, setEmailaddress] = useState('');

    return (
        <View style={FPStyles.container}>
            {/* <Text style={FPStyles.header}>ForgotPassword</Text> */}
            <Text style={FPStyles.heading}>Enter EmailAddress</Text>
            <TextInput
                style={FPStyles.input}
                placeholder="@gmail.com"
                onChangeText={setEmailaddress}
                value={EmailAddress}
            />

            <Text style={FPStyles.footer} onPress={() => navigation.navigate('Login')} > Back to sign In </Text>
            <TouchableOpacity style={FPStyles.loginButton} >
                <Text style={FPStyles.loginButtonText} >Send</Text>
            </TouchableOpacity>

        </View>
    );
}

const FPStyles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor:'white'
      },
      heading: {
        fontSize: 16,
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
        marginBottom: 10,
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
        fontSize: 13,
        fontWeight: 'regular',
        marginBottom: 20,
        color: '#9F9B9B',
        // paddingTop: 8,
        paddingTop: 5,
    
    }
  
  });
  
  


export default ForgotPassword;
