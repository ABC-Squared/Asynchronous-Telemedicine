import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/TabNavigation';
import { LoginStackNavigator, MainStackNavigator } from './navigation/StackNavigation';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase/firebase';

export default function App() {

  // For testing, false -> show the logging in stack; true -> show the main stack
  // var isLoggedIn = true;
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}