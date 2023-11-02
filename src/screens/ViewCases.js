import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';




function ViewCases({ navigation }) {

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
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> View Cases</Text>

            </View>

            <View>
                <Text style={{ color: '#0079D0', marginLeft: 22, fontSize: 16, marginTop: 13 }}  >I. Patient Details: Personal</Text>
                <Text style={{ marginLeft:30, fontSize: 14, color: '#545454', lineHeight: 28, marginTop: 15 }}>

                    Name                         :    Alan Aleena{"\n"}
                    Age                             :    31 {"\n"}
                    Gender                       :    Female {"\n"}
                    Occupation                :    Teacher {"\n"}
                    Contact Number        :    0701122334 {"\n"}
                    Address                      :    No 9, Temple Street {"\n"}
                    Ward                           :    23A {"\n"}
                    BHT                            :    123456 {"\n"}
                    Comorbidities            :    DM {"\n"}
                    Health ID                    :    02121454635 {"\n"}
                    District                       :    Jaffna {"\n"}
                    Height                        :    158cm {"\n"}
                    weight                        :   69Kg{"\n"}


                </Text>
            </View>

            <View style={Styles.patientDetails} >
                <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, position: 'absolute', left: 8, top: 2 }}>Case 4 </Text>
                <Text style={{ fontSize: 12, padding: 8, position: 'absolute', right: 5, top: 2, color: '#000000' }}>Date : Mar 30 of 23 </Text>

                <Text style={{ fontSize: 11, color: '#666666', fontWeight: 'bold', margin: 3, marginLeft: 8, marginRight: 10, position: 'absolute', left: 9, right: 2, bottom: 12, }}>An osteotomy is a bone-cutting procedure to realign and reshape your
                    bones and joints. Your jaw, elbow, spine, shoulder, hips,

                </Text>

            </View>
            <View style={Styles.patientDetails} >
                <Text style={{ fontSize: 12, fontWeight: 'bold', padding: 8, position: 'absolute', left: 8, top: 2 }}>Case 3 </Text>
                <Text style={{ fontSize: 12, padding: 8, position: 'absolute', right: 5, top: 2, color: '#000000' }}>Date : Mar 30 of 23 </Text>

                <Text style={{ fontSize: 11, color: '#666666', fontWeight: 'bold', margin: 3, marginLeft: 8, marginRight: 10, position: 'absolute', left: 9, right: 2, bottom: 12, }}>An osteotomy is a bone-cutting procedure to realign and reshape your
                    bones and joints. Your jaw, elbow, spine, shoulder, hips,

                </Text>


            </View>

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
    patientDetails: {
        width: 345,
        height: 87,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
        marginBottom: 1,
        marginHorizontal: 22,
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: '#0079D0',
        shadowOpacity: 0.75,
        shadowOffset: {
            width: 100,
            height: 11,
        },
        shadowRadius: 12,
        elevation: 15,
    },
    // textInput: {
    //     paddingHorizontal: 10,
    //     paddingVertical: 10,
    //     borderColor: "#817979",
    //     borderWidth: 1,
    //     borderRadius: 5,
    //     width: 270,
    //     height: 30,
    //     marginLeft: 5,
    //     // position: 'absolute',
    //     // top: 25,
    //     // fontSize: 12,
    // },





});



export default ViewCases