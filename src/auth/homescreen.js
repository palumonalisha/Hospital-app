import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import homeStyle from './src/Styles/homeStyle';

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import authStyle from './src/Styles/authStyle';

// export default function App() {
// const ForgotPassword = ({ navigation }) => {

function homescreen({ navigation }) {
    const [EmailAddress, setEmailaddress] = useState('');

    return (
        <View style={homeStyle.container}>
          
            <view> </view>
            <Text style={homeStyle.footer} onPress={() => navigation.navigate('Login')} > Back to sign In </Text>
            <TouchableOpacity style={homeStyle.loginButton} >
                <Text style={homeStyle.loginButtonText} >Send</Text>
            </TouchableOpacity>

        </View>
    );
}


export default homescreen;
