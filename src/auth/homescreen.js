
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, MyCases, BookmarkedCases, AllCases } from '../screens'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/index'
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Image } from 'react-native';
// import homeStyle from './src/Styles/homeStyle';

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="My Cases"
        component={MyCases}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'document' : 'document-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Book Marked"
        component={BookmarkedCases}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'bookmarks' : 'bookmarks-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="All Cases"
        component={AllCases}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'list' : 'list-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

const  homeStyle = StyleSheet.create({

  Surgicaldirectory:{ 
      fontSize: 16,
      backgroundColor:'blue100'

  }
 
});


export default BottomTabNavigation