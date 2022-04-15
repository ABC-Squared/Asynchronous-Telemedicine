import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/TabNavigation';
import { LoginStackNavigator } from './navigation/StackNavigation';
import { useState } from 'react';
import { LogBox } from 'react-native';
import { auth } from './firebase/firebase';


export default function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

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