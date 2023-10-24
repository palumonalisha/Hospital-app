
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/auth/Login';
import Edit from './src/auth/Edit';
import ForgotPassword from './src/auth/ForgotPassword';
import homeScreen from './src/auth/homeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen">
        {/* <Stack.Screen name="homescreen" component={homescreen} /> */}
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="homeScreen" component={homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>



  );
};


export default App;
