import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import authStyle from './src/Styles/authStyle';
import { Picker } from '@react-native-picker/picker';

// const Edit = ({ navigation }) => {

function Edit({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Conformpassword, setConformPassword] = useState('');
  const [password, setPassword] = useState('');
  const [Speciality, setSpeciality] = useState('');
  // const [selectedValue, setSelectedValue] = useState('option1'); // Set the default selected value
  // const options = [
  //   { label: 'Option 1', value: 'option1' },
  //   { label: 'Option 2', value: 'option2' },
  //   { label: 'Option 3', value: 'option3' },
  // ];

  return (
    <View style={authStyle.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DADmDljcwU5JX9oJ7hAAIk8Z4DJgEZviLA&usqp=CAU' }}
        style={{ width: 100, height: 70, marginBottom: 10, resizeMode: 'contain' }}
      />

      <Text style={authStyle.header}>Edit</Text>
      <TextInput
        style={authStyle.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={authStyle.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={authStyle.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={authStyle.input}
        placeholder="Conformpassword"
        secureTextEntry={true}
        onChangeText={setConformPassword}
        value={Conformpassword}
      />

      {/* <Text>Select an option:</Text> */}
      <TextInput
        style={authStyle.input}
        placeholder="Select your speciality"
        onChangeText={setSpeciality}
        value={Speciality}
      />
      {/* 
      <Picker style={authStyle.Picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker> */}

      <TouchableOpacity style={authStyle.loginButton}  onPress={() => navigation.navigate('homescreen')} >
        <Text style={authStyle.loginButtonText}>Update</Text>
      </TouchableOpacity>

    </View>
  );
};


export default Edit;