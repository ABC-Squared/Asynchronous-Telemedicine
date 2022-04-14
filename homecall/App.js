import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/TabNavigation';
import { LoginStackNavigator, MainStackNavigator } from './navigation/StackNavigation';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './firebase/firebase';
import { auth } from './firebase/firebase';

export default function App() {

  const [signedIn, setSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return(
    <NavigationContainer>
    {signedIn
      ? (
        <BottomNavigator />
      ) : (
        <>
          <LoginStackNavigator />
        </>
      )}
  </NavigationContainer>
  );

  // return(
  //   <NavigationContainer>
  //     <LoginStackNavigator />
  //   </NavigationContainer>
  // )

  // For testing, false -> show the logging in stack; true -> show the main stack
  // var isLoggedIn = true;
  // return (
  //   <NavigationContainer>
  //     <BottomNavigator />
  //   </NavigationContainer>
  // );
}