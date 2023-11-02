import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from '@rneui/themed';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
// import images from './src/images/report';

function PdfView({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1, }}>
            <View style={Styles.header} >

                <Icon
                    name="chevron-left"
                    size={16}
                    color='#777777'
                    style={{ position: 'absolute', left: 22, bottom: 10, backgroundColor: '#F6F6F6', }}
                />

                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> FBC - PDF View </Text>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                <View style={Styles.box}>
        
                </View>
                
                <Text> X-ray </Text>

                <View style={Styles.box}>

                </View>
                <Text> X-ray </Text>

                <View style={Styles.box}>

                </View>
                <Text> X-ray </Text>

                <View style={Styles.box}>
                </View>
                <Text> X-ray </Text>

                <View style={Styles.box}>

                </View>
                
            </View>


        </View>

    );
};

const Styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },
    header: {
        width: 400,
        height: 40,
        backgroundColor: '#F6F6F6',
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 12,

    },

    box: {
        width: 108,
        height: 141,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 2,
        paddingHorizontal: 12,
        marginLeft: 19,
        marginTop: 20
    },



});
export default PdfView