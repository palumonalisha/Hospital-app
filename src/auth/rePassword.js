import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { cloneDeep } from 'lodash/lang';
// import Icon from 'react-native-vector-icons/AntDesign';

function rePassword({ navigation }) {
  const [password, setPassword] = useState({
    OldPassword: '',
    NewPassword: '',
    ConfirmNewPassword: '',
  
  })

  return (
    <View style={Styles.container}>
     
      <Text style={Styles.header}> Reset Password</Text>

      <TextInput
        style={Styles.input}
        placeholder="Old Password"
        onChangeText={(value) => {
          const PasswordDetails = cloneDeep(update)
          PasswordDetails.name = value
          setUpdate(PasswordDetails)
        }}
        value={password.OldPassword}
      />
      
      <TextInput
        style={Styles.input}
        placeholder="New Password"
        onChangeText={(value) => {
          const PasswordDetails = cloneDeep(update)
          PasswordDetails.name = value
          setUpdate(PasswordDetails)
        }}
        value={password.NewPassword}
      />
      
      <TextInput
        style={Styles.input}
        placeholder="Confirm New Password"
        onChangeText={(value) => {
          const PasswordDetails = cloneDeep(update)
          PasswordDetails.name = value
          setUpdate(PasswordDetails)
        }}
        value={password.ConfirmNewPassword}
       
      />

    
      <Text style={{ fontSize: 14, color: '#545454', marginTop: 30, marginBottom: 20, marginRight: 139, }}>
        Update Your  <Text style={{ fontSize: 16, color: '#0079D0',fontWeight:'bold',}}> Password</Text>
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
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#545454',
    marginRight: 162,
    // position: 'absolute',
    // left:28,
    // top: 70
  
  },
  input: {
    // width: '80%',
    width: 304,
    height: 40,
    borderWidth: 1,
    color: '#000000',
    fontWeight: 'semibold',
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


});




export default rePassword;