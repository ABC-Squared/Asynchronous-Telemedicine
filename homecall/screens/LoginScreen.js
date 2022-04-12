import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
    
    return(
        <View style={styles.loginContainer}>   
          <Text>homecall login screen</Text>
          <TextInput autoCapitalize='none' placeholder="Username/Email" style={styles.loginTextInput} placeholderTextColor="gray" />
          <TextInput autoCapitalize='none' placeholder="Password" style={styles.loginTextInput} placeholderTextColor="gray" secureTextEntry={true} />
          <TouchableOpacity style={styles.loginButtonStyle} onPress={() => navigation.navigate('Home')}>
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
        backgroundColor: "white"
    },
    loginTextInput: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        opacity: 10,
        borderWidth: 2,
        backgroundColor: "#ededed",
        width: 300
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
        backgroundColor: "#F75050",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    loginButtonText : {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
    },
    registerButtonStyle : {
        fontSize: 15,
        color: '#51A0D5'
    }
  });


