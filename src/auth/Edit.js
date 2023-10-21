import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { Image } from './src/images/user.png';
// import { Image } from './user.png';

// const Edit = ({ navigation }) => {

function Edit({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Conformpassword, setConformPassword] = useState('');
  const [password, setPassword] = useState('');
  const [Position, setPosition] = useState('');
  const [Speciality, setSpeciality] = useState('');

  // const imageSource = require('./user.png');

  // const [selectedValue, setSelectedValue] = useState('option1'); // Set the default selected value
  // const options = [
  //   { label: 'Option 1', value: 'option1' },
  //   { label: 'Option 2', value: 'option2' },
  //   { label: 'Option 3', value: 'option3' },
  // ];

  return (
    <View style={Styles.container}>
      {/* <Image
        source={imageSource}
        style={{ width: 50, height: 50 }}
      /> */}

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DADmDljcwU5JX9oJ7hAAIk8Z4DJgEZviLA&usqp=CAU' }}
        style={{ width: 47, height: 47, marginBottom: 10, resizeMode: 'contain' }}

      />

      <Text style={Styles.header}> Profile</Text>
      <TextInput
        style={Styles.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={Styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={Styles.input}
        placeholder="Conformpassword"
        secureTextEntry={true}
        onChangeText={setConformPassword}
        value={Conformpassword}
      />

      {/* <Text>Select an option:</Text> */}

      <TextInput
        style={Styles.input}
        placeholder="Position"
        color='#000000'
        onChangeText={setPosition}
        value={Position}
      />

      <TextInput
        style={Styles.input}
        placeholder="Select your speciality"
        onChangeText={setSpeciality}
        value={Speciality}
      />

      <Text style={{
        fontSize: 14,
        color: '#545454',
        marginTop: 10,
        marginBottom: 20,
        marginRight: 50,
      }}>
        Update Your Profile Latest Information</Text>


      {/* <Picker style={Styles.Picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>  */}

      <TouchableOpacity style={Styles.loginButton} onPress={() => navigation.navigate('homescreen')} >
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


  }

});




export default Edit;