import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image} from 'react-native';
import React from 'react';
import {signIn} from '../firebase/firebaseMethods';
import { useState } from 'react';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handlePress = () => {
      if (!email || !password) {
        Alert.alert('Email/Password field is required.');
      }

      signIn(email, password);
      setEmail('');
      setPassword('');
    };
    
    return(
        <View style={styles.loginContainer}>

        <Image style={styles.logoContainer} source={require(`../assets/homecalllogo.png`)} /> 

          {/* Username field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Email" 
            style={styles.loginTextInput} 
            placeholderTextColor="gray" 
            onChangeText={(email) => setEmail(email)}
            />

          {/* Password field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Password" style={styles.loginTextInput} 
            placeholderTextColor="gray" 
            secureTextEntry={true} 
            onChangeText={(password) => setPassword(password)}
            />

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.loginButtonStyle} 
            onPress={handlePress}
            >

            <Text style={styles.loginButtonText} >
            Log in
            </Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
            <Text style={styles.registerButtonStyle}>
            New to homecall? Click here to register!
            </Text>
        </TouchableOpacity>
        </View>
      );
  }
  
  export default LoginScreen;

const styles = StyleSheet.create({
    inputLabel : {
        flex: 1
    },
    loginContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#F75050"
    },
    loginTextInput: {
        margin: 15,
        height: 40,
        opacity: 10,
        backgroundColor: "#ffff",
        width: 300,
        borderRadius: 10
    },
    textInput: {
      backgroundColor: "#ffff",
      borderRadius: 10,
      height: 50,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    upcomingWrapper: {
      paddingTop: 50,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 'bold'
    },
    upcomingItems: {
      marginTop: 20,
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 5,  
      elevation: 3
    },
    recentWrapper: {
      paddingTop: 25,
      paddingHorizontal: 20
    },
    recentItems: {
      marginTop: 20,
      marginHorizontal: 10,
      padding: 10,
      backgroundColor: '#F2F2F2',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 5,  
      elevation: 3
    },
    item: {
        backgroundColor: '#F75050',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3
    },
    loginButtonStyle : {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    loginButtonText : {
        fontSize: 18,
        color: "#F75050",
        alignSelf: "center",
    },
    registerButtonStyle : {
        marginTop: 20,
        fontSize: 15,
        color: 'black'
    },
    logoContainer : {
      width: 200,
      height: 40,
      marginBottom: 50
    }
  });


