import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { postAppointment } from '../firebase/firebaseMethods';

const UploadScreen = ({route}) => {
  const appointmentName = route.params;

  const handlePress = () => {
    console.log("appointment name", appointmentName)
    postAppointment(appointmentName.appointmentName);
  };
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.uploadButtonStyle}>
        <Text style={styles.textInButton}>
            <Icon size={30} name="image" style={styles.icon} />
            Upload Image
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButtonStyle}>
        <Text style={styles.textInButton}>
            <Icon size={30} name="music" style={styles.icon} />
            Upload Audio
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress} style={styles.uploadButton}>
          <Icon color="white" size={50} name="arrow-up" />
        </TouchableOpacity>
        </View>
        
  );
}

export default UploadScreen;

const styles = StyleSheet.create({
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
    nextButtonStyle:{
      margin: 10,
      width: 250,
      backgroundColor:"#FF0000",
      justifyContent:'center',
      alignSelf: 'center',
    },
    uploadButtonStyle: {
        height: 100,
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3
    },
    icon: {
        height: 40
    },
    textInButton: {
        fontSize: 30,
        fontWeight: "bold"
    },
    uploadButton: {
      marginTop: 20,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#F75050',
    }
  });


