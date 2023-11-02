
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { Button } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

function PersonalDetails({ navigation }) {

    return (
        <View style={{ backgroundColor: 'white', flex: 1, }}>
            <View style={Styles.header} >

                <Icon
                    name="chevron-left"
                    size={16}
                    color='#777777'
                    style={{ position: 'absolute', left: 22, bottom: 10, backgroundColor: '#F6F6F6', }}
                />

                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginBottom: 25, position: 'absolute', left: 55 }}> Case Details</Text>
            </View>

            
            <View style={{ flexDirection:'row', flexWrap:'wrap', marginTop: 4,}} >
             <Button buttonStyle={Styles.personalButton}  title="Personal details" type="outline"  titleStyle={Styles.personalButtonText}  />
             <Button buttonStyle={Styles.Button}  title="Intra operative 01" type="outline"  titleStyle={Styles.ButtonText}  />
             <Button buttonStyle={Styles.Button}  title="Post operative" type="outline"  titleStyle={Styles.ButtonText} />
             <Button  onPress={() => navigation.navigate('PreOperative')} buttonStyle={Styles.Button}  title="Pre operative" type="outline"  titleStyle={Styles.ButtonText}  />
             <Button buttonStyle={Styles.Button}  title="Intra operative 02" type="outline"  titleStyle={Styles.ButtonText}  />
             <Button buttonStyle={Styles.Button}  title="Follow up" type="outline"  titleStyle={Styles.ButtonText}  />
             </View>
            <View>
                <Text style={{ fontSize: 21, color: '#0079D0', marginTop:17, marginLeft: 20, marginBottom:17, fontWeight: 'bold' }}> Personal details </Text>
                <TouchableOpacity style={Styles.MoreButton} onPress={() => navigation.navigate('ViewCases')} >
                    <Text style={{ color: 'white',marginTop:3,marginLeft:9,fontSize: 12 }}  > More Info  </Text>
                </TouchableOpacity>
            
                <Text style={{ marginLeft: 26,marginBottom:6,fontSize: 14, color: '#545454' ,lineHeight: 28,}}>
                    
                    Name                         :    Alan Aleena {"\n"}

                   Age                            :    31 {"\n"}

                   Gender                       :    Female {"\n"}

                   Occupation                :    Teacher {"\n"}

                   Contact Number       :    0701122334 {"\n"}

                   Address                     :    No 9, Temple Street {"\n"}

                   Ward                          :    23A {"\n"}

                   BHT                            :    123456 {"\n"}

                   Comorbidities            :    DM {"\n"}

                   Health ID                   :    02121454635 {"\n"}

                   District                       :    Jaffna

                </Text>
            </View>

            <View>

                <Text style={{ color: '#0079D0', marginLeft: 22, fontSize: 16, marginTop: 12,marginBottom: 6 }}  > Past surgical History</Text>
                <View style={Styles.history}>
                    <Text style={{ fontSize: 13 }}>The past medical history (PMH) covers past and ongoing medical problems, hospitalizations,
                        trauma and surgeries, OB-Gyn history when relevant, and preventive health
                    </Text>
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
    history: {
        width: 349,
        height: 87,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 2,
        paddingHorizontal: 12,
        marginLeft: 25,
        marginTop: 6
    },

    personalButton: {
        width: 113,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        paddingVertical: 3,
        borderRadius: 2,
        borderColor: '#0079D0',
        borderWidth:1,
        marginLeft: 14,
        marginTop: 11,
    },
    
    MoreButton:{
        width: 100,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        paddingVertical: 3,
        borderRadius: 50,
        borderColor: '#0079D0',
        marginLeft: 214,
        marginTop: 17,
        position:'absolute',
        right:11

    },

    Button: {
        width: 113,
        height: 30,
        alignItems: 'center',
        // backgroundColor: '#0079D0',
        paddingVertical: 3,
        borderRadius: 2,
        borderColor: '#0079D0',
        borderWidth:1,
        marginLeft: 14,
        marginTop: 11,
    },
    

    personalButtonText: {
        color: '#ffff',
        fontSize: 11,
        fontWeight: 2,
        marginTop: 2,
        

    },

    ButtonText: {
        color: '#0079D0',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 2,

    },




});



export default PersonalDetails