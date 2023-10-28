
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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

            <View >
                <TouchableOpacity style={Styles.personalDButton} onPress={() => navigation.navigate('personalDetails')} >
                    <Text style={Styles.personalDButtonText}  >Personal details</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={Styles.intraButton} onPress={() => navigation.navigate('IntraOperative01')} >
                    <Text style={Styles.ButtonText}  >Intra operative 01 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.postButton} onPress={() => navigation.navigate('PostOperative')} >
                    <Text style={Styles.ButtonText}  >Post operative  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.preButton} onPress={() => navigation.navigate('PreOperative')} >
                    <Text style={Styles.ButtonText}  >Pre operative  </Text>
                </TouchableOpacity>

                <TouchableOpacity  style={Styles.intra2Button} onPress={() => navigation.navigate('IntraOperative02')} >
                    <Text style={Styles.ButtonText}  >Intra operative 02 </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.followButton} onPress={() => navigation.navigate('FollowUp')} >
                    <Text style={Styles.ButtonText}  >Follow up  </Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text style={{fontSize:21,color:'#0079D0',marginTop:52,marginLeft:20,fontWeight:'bold'}}> Personal details </Text>
                <TouchableOpacity style={Styles.MoreButton} onPress={() => navigation.navigate('FollowUp')} >
                    <Text style={{color:'white'}}  >More Info  </Text>
                </TouchableOpacity>
            </View>

            <View> 
                <Text>  </Text>
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
    personalDButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        // paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 2,
        borderColor: '#BDBDBD',
        marginLeft:20,
        marginTop:11,
    },
    intraButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 5,
        borderRadius: 2,
        borderColor: 'blue',
        color:'#0079D0',
        position:'absolute',
        top:11,
        left:145,
    },

    postButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 5,
        borderRadius: 2,
        borderColor: 'blue',
        color:'#0079D0',
        position:'absolute',
        top:11,
        left:268,
    },
    preButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 5,
        borderRadius: 2,
        borderColor: 'blue',
        color:'#0079D0',
        marginLeft:20,
        position:'absolute',
        top:50,
        // left:8,
    },

    intra2Button: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 5,
        borderRadius: 2,
        borderColor: 'blue',
        color:'#0079D0',
        position:'absolute',
        top:50,
        left:145,
    },
    followButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        paddingVertical: 5,
        borderRadius: 2,
        borderColor: 'blue',
        color:'#0079D0',
        position:'absolute',
        top:50,
        left:268,
    },
    MoreButton: {
        width: 110,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#0079D0',
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: 'blue',
        color:'#0079D0',
        marginTop:52,
        position:'absolute',
        // top:50,
        left:268,
    },

    personalDButtonText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 4,
        
      },
     
      ButtonText: {
        color: '#0079D0',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 2,
        
      },
      



});



export default PersonalDetails