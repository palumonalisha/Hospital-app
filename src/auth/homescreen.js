
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import homeStyle from './src/Styles/homeStyle';

function homeScreen({ navigation }) {

  return (
    <View style={{ backgroundColor: 'white', flex: 1, }}>
      <View style={Styles.header} >
        <Icon
          name="user-circle-o"
          size={23}
          color='#0079D0'
        // backgroundColor="#4A99E9"
        >
          <Text style={{ color: 'black', fontSize: 16, }}> Surgical directory</Text>
        </Icon>
      </View>

      <View style={Styles.container} >
        <Text >
          <Text style={{ fontSize: 17, }} >Hello </Text>
          <Text style={Styles.alan}> Alan,</Text>
          <Text style={{ color: '#0079D0', fontSize: 30, fontWeight: 'bold', paddingTop: 200 }}>100 </Text>
          <Text style={{ fontSize: 12, }}>operated till now </Text>
        </Text>
      </View>

      <View style={Styles.dateRange} >
      </View>

      <View style={Styles.Recently}>
        <Text style={{ fontSize: 16, color: 'white' }}>Recently Operated </Text>
      </View>

      <View style={Styles.patientDetails} ><></>
        <Text style={{ color: 'black', fontSize: 11, fontWeight: 'bold', marginLeft: 200, marginTop: 40, }}> HID-123456789012</Text>
        <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', marginRight: 100, marginTop: 23, }}> Aysha Ifra</Text>
        <Text style={{ color: 'black', fontSize: 11, marginRight: 100 }}> Ear problem problem</Text>
        <Text style={{ color: 'black', fontSize: 11, marginLeft: 100, marginBottom: 4 }}>Today</Text>

        <Icon
          name="user-circle-o"
          size={31}
          color='#0079D0'
          marginLeft='500'
          style={{ marginRight: 300, marginBottom: 30 }}
        />
        <Text style={{ color: '#0A7908', fontSize: 11, marginRight: 200, marginBottom: 0 }}>Discharged</Text>

        <Icons
          name="mode-edit-outline"
          size={21}
          color='#0079D0'
          marginLeft='500'
          style={{ marginLeft: 250, }}
        />

        <Icons
          name="bookmark"
          size={21}
          color='#0079D0'
          marginLeft='500'
          style={{ marginLeft: 250, }}
        />

        <Icon
          name='circle'
          // type="AntDesign"
          size={11}
          color='#4BE85A'
          iconContainerStyle={{ position: 'absolute', left: 150, top: 500, color: '#4BE85A' }}
          style={Styles.Icon}

        />
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
    paddingHorizontal: 13,

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
    width: 337,
    height: 60,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 26,
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#0079D0',
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 9,
      height: 23,
    },
    shadowRadius: 10,
    elevation: 13
  }

});



export default homeScreen