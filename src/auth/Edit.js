import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';





const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Conformpassword, setConformPassword] = useState('');
  const [password, setPassword] = useState('');
  const [Speciality, setSpeciality] = useState('');

  const [selectedValue, setSelectedValue] = useState('option1'); // Set the default selected value

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  const handleEdit = () => {

    console.log('Login clicked. Username:', name, 'Password:', password);
  };


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DADmDljcwU5JX9oJ7hAAIk8Z4DJgEZviLA&usqp=CAU' }}
        style={{ width: 100, height: 70, marginBottom: 10, resizeMode: 'contain' }}
      />

      <Text style={styles.header}>Edit</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Conformpassword"
        secureTextEntry={true}
        onChangeText={setConformPassword}
        value={Conformpassword}
      />

      {/* <Text>Select an option:</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Select your speciality"
        onChangeText={setSpeciality}
        value={Speciality}
      />


      <Picker style={styles.Picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>


      <TouchableOpacity style={styles.loginButton} onPress={handleEdit}>
        <Text style={styles.loginButtonText}>Update</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#545454',
  },
  input: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: '75%',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#0079D0',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Picker: {
    alignItems: 'right',


  },

});

export default Edit;