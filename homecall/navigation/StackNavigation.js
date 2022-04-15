import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ApptScreen1 from "../screens/ApptScreen1";
import ApptScreen2 from "../screens/ApptScreen2";
import UploadScreen from "../screens/UploadScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/Home";
import Chat from "../screens/Chat";


const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#F1E4E8',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="Page 1" component={ApptScreen1} />
            <Stack.Screen name="Page 2" component={ApptScreen2} />
            <Stack.Screen name="Page 3" component={UploadScreen} />
        </Stack.Navigator>
    );
}

// Create another stack navigator
const LoginStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

const HomeStackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Main" component={HomeScreen} />
          <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
  );
}

export {MainStackNavigator, LoginStackNavigator, HomeStackNavigator}