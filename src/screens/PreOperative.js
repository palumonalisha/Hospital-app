import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { Button } from '@rneui/themed';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

function PreOperative({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1, }}>
            <View style={Styles.header} >

                <Icon
                    name="chevron-left"
                    size={16}
                    color='#777777'
                    style={{ position: 'absolute', left: 22, bottom: 10, backgroundColor: '#F6F6F6', }}
                />

                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> Patient Details </Text>
            </View>

            <View >

                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap',marginTop: 4, }} >
                    <Button onPress={() => navigation.navigate('PersonalDetails')} buttonStyle={Styles.Button} title="Personal details" type="outline" titleStyle={Styles.ButtonText} />
                    <Button buttonStyle={Styles.Button} title="Intra operative 01" type="outline" titleStyle={Styles.ButtonText} />
                    <Button buttonStyle={Styles.Button} title="Post operative" type="outline" titleStyle={Styles.ButtonText} />
                    <Button buttonStyle={Styles.preButton} title="Pre operative" type="outline" titleStyle={Styles.preButtonText} />
                    <Button buttonStyle={Styles.Button} title="Intra operative 02" type="outline" titleStyle={Styles.ButtonText} />
                    <Button buttonStyle={Styles.Button} title="Follow up" type="outline" titleStyle={Styles.ButtonText} />
                </View>

            </View>

            <View>
            <Text style={{ fontSize: 21, color: '#0079D0', marginTop:95, marginLeft: 20, marginBottom:17, fontWeight: 'bold' }}> Pre Operative </Text>
            </View>
            <Text style={{ color: '#0079D0', marginLeft: 22, fontSize: 12,  marginBottom:10,fontWeight:'Bold'}}  > Diagnosis : </Text>
                <View style={Styles.history}>
    
                <Text style={{ fontSize: 13 }}>The past medical history (PMH) covers past and ongoing medical problems, hospitalizations, trauma and surgeries, 
                OB-Gyn history when relevant, and preventive health
                </Text>
                </View>

                <Text  style={{ color: '#545454', marginLeft: 25, fontSize: 14,  marginTop:20 ,marginBottom:4 }} > System             :   Upper GI   </Text>

                <View  style={Styles.test} >
                <Text  style={{ color: '#545454',  fontSize: 14,   }} > Biochemical test   </Text>
                </View>
                <View  style={Styles.test} >
                <Text  style={{ color: '#545454',  fontSize: 14,   }} > Radiological test   </Text>
                </View>
                <View  style={Styles.test} >
                <Text  style={{ color: '#545454',  fontSize: 14,   }} > Endoscopy   </Text>
                </View>
                <View  style={Styles.test} >
                <Text  style={{ color: '#545454',  fontSize: 14,   }} > Histopathological test   </Text>
                </View>
                <View  style={Styles.test} >
                <Text  style={{ color: '#545454', fontSize: 14,   }} > Other   </Text>
                </View>
                <Text  style={{ color: '#545454', marginLeft: 28, fontSize: 14,  marginTop:18 ,marginBottom:4 }} > Treated By :  AB. Name   </Text>
        
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

    preButton: {
        width: 113,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        paddingVertical: 3,
        borderRadius: 2,
        borderColor: '#0079D0',
        borderWidth: 1,
        marginLeft: 14,
        marginTop: 11,

    },

    Button: {
        width: 113,
        height: 30,
        alignItems: 'center',
        // backgroundColor: '#0079D0',
        paddingVertical: 3,
        borderRadius: 2,
        borderColor: '#0079D0',
        borderWidth: 1,
        marginLeft: 14,
        marginTop: 11,
    },


    preButtonText: {
        color: '#ffff',
        fontSize: 11,
        fontWeight: 2,
        marginTop: 2,


    },
    history: {
        width: 349,
        height: 87,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 2,
        paddingHorizontal: 12,
        marginLeft: 25,
        
    },
    test: {
        width: 349,
        height: 30,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 12,
        marginLeft: 25,
        marginTop: 22,
        borderRadius: 2,
    },



    ButtonText: {
        color: '#0079D0',
        fontSize: 11,
        fontWeight: 'Medium',
        marginTop: 2,


    },




});


export default PreOperative