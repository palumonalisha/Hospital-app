import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {

    const [EmailAddress, setEmailaddress] = useState('');


    return (
        <View style={styles.container}>

            {/* <Text style={styles.header}>ForgotPassword</Text> */}

            <Text style={styles.heading}>Enter EmailAddress</Text>
            <TextInput
                style={styles.input}
                placeholder="@gmail.com"
                onChangeText={setEmailaddress}
                value={EmailAddress}
            />
            <Text style={styles.footer} onPress={() => navigation.navigate('Login')} > Back to sign In </Text>

            <TouchableOpacity style={styles.loginButton} >
                <Text style={styles.loginButtonText} >Send</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    heading: {
        fontSize: 17,
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
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#545454',

    }

});

