

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';




function AllCases({ navigation }) {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View style={{ backgroundColor: 'white', flex: 1, }}>
            <View style={Styles.header} >
                <Icon
                    name="chevron-left"
                    size={16}
                    color='#777777'
                    style={{ position: 'absolute', left: 22, bottom: 10, backgroundColor: '#F6F6F6', }}
                // backgroundColor="#4A99E9"
                >
                </Icon>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> All Cases</Text>

            </View>

            <View>
                <SafeAreaView style={{ marginHorizontal: 20, }}>
                    <TextInput
                        placeholder='Name/BHT/Health ID  '
                        clearButtonMode="always"
                        style={Styles.searchBox}
                    />
                </SafeAreaView>

                <Icons
                    name="search"
                    size={21}
                    color='#B3B3B3'
                    marginLeft='500'
                    style={{
                        marginLeft: 50, position: 'absolute',
                        top: 37, left: 300
                    }}
                />
            </View>

            <TouchableOpacity   onPress={() => setModalVisible(!modalVisible)}>
            <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold', position: 'absolute', right: 16, top: 24 }} onClick={() => setModalVisible(!modalVisible)} > Advanced Search </Text>
            </TouchableOpacity>

            {/* <Button  onPress={() => setModalVisible(!modalVisible)}  style={{ color: 'black', fontSize: 13, fontWeight: 'bold', position: 'absolute', right: 16, top: 112 }}  title=" Advanced Search" />  */}


            <View style={Styles.patientDetails} >

                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>Today</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#0A7908', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Discharged</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#4BE85A'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>

            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>Yesterday</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#8F720B', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Warding</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#F9F136'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>

            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>03/03/23</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#F8762D', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Missing</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                    onPress={() => navigation.navigate('homeScreen')}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#F8762D'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>


            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>03/03/23</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#8F720B', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Warding</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#F9F136'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>


            <View style={Styles.patientDetails1} >
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>00/00/00</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#8F0B0B', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Death</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#FA0D0D'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>
            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>03/04/23</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#0A7908', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Discharged</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#4BE85A'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>
            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>Today</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#0A7908', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Discharged</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#4BE85A'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>
            <View style={Styles.patientDetails1} ><></>
                <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 238, marginBottom: 28 }}> HID-123456789012</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, position: 'absolute', left: 80, bottom: 28 }}> Aysha Ifra</Text>
                <Text style={{ color: 'black', fontSize: 12, marginRight: 100, position: 'absolute', left: 80, bottom: 10 }}> Ear problem problem</Text>
                <Text style={{ color: 'black', fontSize: 12, marginLeft: 100, marginBottom: 4, position: 'absolute', left: 152, bottom: 6 }}>Yesterday</Text>
                <Icon
                    name="user-circle-o"
                    size={28}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginRight: 300, marginTop: 30, position: 'absolute', left: 15, bottom: 18 }}
                />
                <Text style={{ color: '#8F720B', fontSize: 11, fontWeight: 'bold', marginRight: 200, position: 'absolute', bottom: 2, left: 10 }}>Warding</Text>
                <Icons
                    name="edit"
                    size={21}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 59 }}
                />
                <Icons
                    name="bookmark"
                    size={20}
                    color='#0079D0'
                    marginLeft='500'
                    style={{ marginLeft: 250, position: 'absolute', bottom: 8, left: 88 }}
                />
                <Icon
                    name='circle'
                    // type="AntDesign"
                    size={11}
                    color='#F9F136'
                    style={{ position: 'absolute', left: 35, bottom: 18 }}
                />
            </View>

            <Modal

                transparent={true}
                visible={modalVisible}
            
            >

                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={{ backgroundColor: "#ffff", margin: 40, padding: 14, borderRadius: 5, marginTop: 95, flex: 1, marginBottom: 5, width: 311, height: 643 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Advance search </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5, padding: 5, }}>Name </Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Health Id </Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>BHT </Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Gender </Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Age</Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Comorbidities</Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Patient mobile number</Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>District</Text>
                        <TextInput style={Styles.textInput}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, }}>Date</Text>
                        <TextInput style={Styles.textInput1}
                        />


                        <Text style={{ position: 'absolute', bottom: 69, left: 27, fontWeight: 'bold', fontSize: 14 }} >From</Text>
                        <Icon
                            name="calendar"
                            size={10}
                            color='#0079D0'
                            marginLeft='500'
                            style={{ position: 'absolute', bottom: 72, left: 122 }}
                        />

                        <Text style={{ position: 'absolute', bottom: 69, left: 154, fontSize: 14, fontWeight: 'bold', }} >To</Text>

                        <Icon
                            name="calendar"
                            size={10}
                            color='#0079D0'
                            marginLeft='500'
                            style={{ position: 'absolute', bottom: 72, left: 266 }}
                        />

                        <TouchableOpacity style={Styles.submit}  onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={{ fontSize: 14, color:'#ffff',position: 'absolute', top: 4}}> Submit</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, color:'#0079D0',}}> Submit</Text> */}


                </View>

            </Modal>


        </View>

    );


};
const Styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
        // padding: 20,
        // backgroundColor: 'white'
    },
    header: {
        width: 400,
        height: 40,
        // backgroundColor: '#F6F6F6',
        backgroundColor: '#F6F6F6',
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'left',
        paddingHorizontal: 12,

    },

    searchBox: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#B3B3B3",
        borderWidth: 1,
        borderRadius: 5,
        width: 360,
        height: 36,
        marginTop: 0,
        position: 'absolute',
        top: 25,
        fontSize: 12,

    },

    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#817979",
        borderWidth: 1,
        borderRadius: 5,
        width: 270,
        height: 30,
        marginLeft: 5,
        // position: 'absolute',
        // top: 25,
        // fontSize: 12,
    },
    textInput1: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: "#0079D0",
        backgroundColor: "#F2F2F2",
        borderWidth: 1,
        borderRadius: 5,
        width: 270,
        height: 30,
        marginLeft: 5,
        // position: 'absolute',
        // top: 25,
        // fontSize: 12,
    },

    number: {
        Color: '#0079D0',
        fontSize: 30,
        fontWeight: 'bold',

    },
    Recently: {
        width: 400,
        height: 46,
        backgroundColor: '#0079D0',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    patientDetails: {
        width: 365,
        height: 50,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 57,
        marginBottom: 1,
        marginHorizontal: 14,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#0079D0',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 9,
            height: 23,
        },
        shadowRadius: 10,
        elevation:10
    },
    patientDetails1: {
        width: 365,
        height: 50,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 1,
        marginHorizontal: 14,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#0079D0',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 10,
            height: 23,
        },
        shadowRadius: 10,
        elevation: 13
    },


    TextStyle: {
        textDecorationLine: 'Underline'
    },
    submit: {
        width: 100,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        // paddingHorizontal: 30,
        // paddingVertical: 5,
        borderRadius: 5,
        borderColor: '#BDBDBD',
        position:'absolute',
        bottom: 17, 
        left: 192

      },



});



export default AllCases