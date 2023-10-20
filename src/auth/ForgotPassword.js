import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import authStyle from './src/Styles/authStyle';

// export default function App() {
// const ForgotPassword = ({ navigation }) => {

function ForgotPassword({ navigation }) {
    const [EmailAddress, setEmailaddress] = useState('');

    return (
        <View style={authStyle.container}>
            {/* <Text style={authStyle.header}>ForgotPassword</Text> */}
            <Text style={authStyle.heading}>Enter EmailAddress</Text>
            <TextInput
                style={authStyle.input}
                placeholder="@gmail.com"
                onChangeText={setEmailaddress}
                value={EmailAddress}
            />

            <Text style={authStyle.footer} onPress={() => navigation.navigate('Login')} > Back to sign In </Text>
            <TouchableOpacity style={authStyle.loginButton} >
                <Text style={authStyle.loginButtonText} >Send</Text>
            </TouchableOpacity>

        </View>
    );
}


export default ForgotPassword;
