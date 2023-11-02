
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/MaterialIcons';




function BookMarks({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1, }}>
             <ScrollView>

            
            <View style={Styles.header} >
                <Icon
                    name="chevron-left"
                    size={16}
                    color='#777777'
                    style={{ position: 'absolute', left: 22, bottom: 10, backgroundColor: '#F6F6F6', }}
                // backgroundColor="#4A99E9"
                >
                </Icon>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> Book Mark</Text>


            </View>


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

            <View style={Styles.patientDetails} ><></>
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

            <View style={Styles.patientDetails} ><></>
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


            <View style={Styles.patientDetails} ><></>
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
            <View style={Styles.patientDetails} ><></>
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

            <View style={Styles.patientDetails} >
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
            <View style={Styles.patientDetails} ><></>
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
            <View style={Styles.patientDetails} ><></>
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
            <View style={Styles.patientDetails} ><></>
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

            <View style={Styles.patientDetails} ><></>
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


            <View style={Styles.TextStyle} >

            </View>

            </ScrollView>
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

    dateRange: {
        width: 400,
        height: 46,
        backgroundColor: '#E0F2FF',
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    date: {
        width: 256,
        height: 28,
        backgroundColor: '#fffF',
        Border: '#0079D0',
        justifyContent: 'center',

        marginBottom: 3,
        borderColor: '#0079D0',
        borderRadius: 5,
    },

    alan: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',

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
        marginTop: 12,
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
        elevation: 10
    },

    TextStyle: {
        textDecorationLine: 'Underline'
    }



});



export default BookMarks