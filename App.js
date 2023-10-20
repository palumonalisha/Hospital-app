
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/auth/Login';
// import Login2 from './src/auth/Login2';
import Edit from './src/auth/Edit';
import ForgotPassword from './src/auth/ForgotPassword';



const Stack = createStackNavigator();

const App = () => {
  return (
    // < ForgotPassword /> 
    // < Edit />
    //  < Login /> 
    <>
       {/* < Login />  */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{Login: true }} initialRouteName="Start1">

          <Stack.Screen name="Login" component={Login} />
           {/* <Stack.Screen name="Login2" component={Login2} /> */}
          //   <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
          // <Stack.Screen name="Edit" component={Edit} />  

        </Stack.Navigator> 
      </NavigationContainer>
    </>


  );
};


export default App;
