
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/auth/Login';
import Edit from './src/auth/Edit';
import ForgotPassword from './src/auth/ForgotPassword';
import homeScreen from './src/auth/homeScreen';
import rePassword from './src/auth/rePassword';
import BookMarks from './src/screens/BookMarks';
import AllCases from './src/screens/AllCases';
import PersonalDetails from './src/screens/PersonalDetails';
import ViewCases from './src/screens/ViewCases';
import PreOperative from './src/screens/PreOperative';
import PdfView from './src/screens/PdfView';
import ImageView from './src/screens/ImageView';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PdfView">
        
      <Stack.Screen name="ImageView" component={ImageView} />
      <Stack.Screen name="PdfView" component={PdfView} />
      <Stack.Screen name="PreOperative" component={PreOperative} />
      <Stack.Screen name="ViewCases" component={ViewCases} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="AllCases" component={AllCases} />
      <Stack.Screen name="BookMarks" component={BookMarks} />
      <Stack.Screen name="rePassword" component={rePassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="homeScreen" component={homeScreen} />
      <Stack.Screen name="Login" component={Login} />
       
      </Stack.Navigator>
    </NavigationContainer>



  );
};


export default App;
