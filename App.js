
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/auth/Login';
import Edit from './src/auth/Edit';
import ForgotPassword from './src/auth/ForgotPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
           <Stack.Screen name="Edit" component={Edit} />  

        </Stack.Navigator> 
      </NavigationContainer>



  );
};


export default App;
