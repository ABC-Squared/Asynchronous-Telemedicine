import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { registration } from '../firebase/firebaseMethods';

const RegisterScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setlastName] = useState('');
  const [firstName, setfirstName] = useState('');
  const [address, setAddress] = useState('');
  const [medications, setMedications] = useState('');
  const [immunizations, setImmunations] = useState('');
  const [doctorCode, setDoctorCode] = useState('');

  const handlePress = () => {
    console.log("this is the email", email);
    registration(email, password, lastName, firstName, address, medications, immunizations, doctorCode);
    setEmail('');
    setPassword('');
    setfirstName('');
    setlastName('');
    setAddress('');
    setMedications('');
    setImmunations('');
    setDoctorCode('');
  };
    
    return(
        <View style={styles.loginContainer}> 

          <Image style={styles.logoContainer} source={require(`../assets/homecalllogo.png`)} />
          {/* First Name field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="First Name" 
            style={styles.loginTextInput} 
            placeholderTextColor="gray" 
            onChangeText={(firstName) => setfirstName(firstName)}
            />
          {/* Last Name field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Last Name" 
            style={styles.loginTextInput} 
            secureTextEntry={false} 
            placeholderTextColor="gray" 
            onChangeText={(lastName) => setlastName(lastName)}
            />  
          {/* Address field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Address" 
            style={styles.loginTextInput} 
            placeholderTextColor="gray" 
            onChangeText={(address) => setAddress(address)}
            />

          {/* Username field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Email" 
            style={styles.loginTextInput}
            secureTextEntry={false} 
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

          {/* Medications field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Medications" 
            style={styles.loginTextInput} 
            secureTextEntry={false} 
            placeholderTextColor="gray" 
            onChangeText={(medications) => setMedications(medications)}
            />
          {/* Immunizations field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Immunizations" 
            style={styles.loginTextInput} 
            secureTextEntry={false} 
            placeholderTextColor="gray"
            onChangeText={(immunizations) => setImmunations(immunizations)}
            />
          
          {/* Doctor Code field */}
          <TextInput 
            autoCapitalize='none' 
            placeholder="Doctor Code" 
            style={styles.loginTextInput} 
            placeholderTextColor="gray"
            secureTextEntry={false}  
            onChangeText={(doctorCode) => setDoctorCode(doctorCode)}
            />

          {/* Login Button */}
          <TouchableOpacity 
            style={styles.loginButtonStyle} 
            onPress={handlePress}
            >

            <Text style={styles.loginButtonText} >
            Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color:'#51A0D5', fontSize:20}}>
                Back
            </Text>
            </TouchableOpacity>
        </View>
      );
  }
  
export default RegisterScreen;

const styles = StyleSheet.create({
    inputLabel : {
        flex: 1
    },
    loginContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    loginTextInput: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        opacity: 10,
        borderWidth: 2,
        backgroundColor: "white",
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
    },
    logoContainer : {
      width: 200,
      height: 40,
      marginBottom: 50
    }
  });


