import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cloneDeep } from 'lodash/lang'
// import Icon from 'react-native-vector-icons/AntDesign';

function Edit({ navigation }) {
  const [update, setUpdate] = useState({
    name: '',
    email: '',
    Conformpassword: '',
    password: '',
    position: '',
    speciality: ''
  })

  return (
    <View style={Styles.container}>
      <Icon
        name='user-circle'
        type="FontAwesome6"
        size={57}
        color='#B4B4B4'
        // color='##ECECEC'
        marginBottom={10}
      />

      <Icon
        name='plus-circle'
        // type="AntDesign"
        size={31}
        marginLeft={100}
        iconContainerStyle={{ position: 'absolute', left: 100, top: 300 }}
        style={Styles.Icon}

      />

      <Text style={Styles.header}> Profile</Text>

      <TextInput
        style={Styles.input}
        placeholder="name"
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.name = value
          setUpdate(UpdatedDetails)
        }}
        value={update.name}
      />

      <TextInput
        style={Styles.input}
        placeholder="Email"
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.email = value
          setUpdate(UpdatedDetails)
        }}
        value={update.email}
      />

      <TextInput
        style={Styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.password = value
          setUpdate(UpdatedDetails)
        }}
        value={update.password}
      />

      <TextInput
        style={Styles.input}
        placeholder="ConfirmPassword"
        secureTextEntry={true}
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.confirmPassword = value
          setUpdate(UpdatedDetails)
        }}
        value={update.confirmPassword}
      />

      <TextInput
        style={Styles.input}
        placeholder="Position"
        color='#000000'
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.position = value
          setUpdate(UpdatedDetails)
        }}
        value={update.position}
      />

      <TextInput
        style={Styles.input}
        placeholder="Select your speciality"
        onChangeText={(value) => {
          const UpdatedDetails = cloneDeep(update)
          UpdatedDetails.speciality = value
          setUpdate(UpdatedDetails)
        }}
        value={update.speciality}
      />

      <Text style={{ fontSize: 14, color: '#545454', marginTop: 10, marginBottom: 20, marginRight: 50, }}>
        Update Your Profile Latest Information
      </Text>
      <TouchableOpacity style={Styles.loginButton} onPress={() => navigation.navigate('homeScreen')} >
        <Text style={Styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
  },
  input: {
    // width: '80%',
    width: 304,
    height: 40,
    borderWidth: 1,
    color: '#545454',
    fontWeight: 'Regular',
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  loginButton: {
    width: 304,
    height: 40,
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#0079D0',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    // borderColor:'#BDBDBD',
  },

  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'Semibold',
    marginTop: 4,
  },

  error: {
    color: 'red',
  },

  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    paddingTop: 8,
  },


  Icon: {
    color: '#0079D0',
    alignSelf: 'right',
    alignItem: 'right',
    position: 'absolute',
    left: 105,
    top: 110
  },

});




export default Edit;