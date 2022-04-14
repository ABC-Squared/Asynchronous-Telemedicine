import {StyleSheet, Text, View, Image} from 'react-native';
import firebase from 'firebase/compat/app';
import { useState, useEffect } from 'react';


function UserScreen() {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      let doc = await firebase
      .firestore()
      .collection('patients')
      .doc(currentUserUID)
      .get();

      if (!doc.exists){
        Alert.alert('No user data found!')
      } else {
        let dataObj = doc.data();
        setFirstName(dataObj.firstName)
        setLastName(dataObj.lastName)
        setAddress(dataObj.address)
      }
    }
    getUserInfo();
  })

  return(
    <View style={styles.container}>
      {/* Title for upcoming appointments */}
      <View style={styles.upcomingWrapper}>
        <Text style={styles.helloTextStyle}>Hello, {firstName}!</Text>

      {/* Image of Patient */}
      <Image style={styles.imageContainer}
        source={require(`../assets/profilepictures/testpfp.jpg`)} //Add other pfp to here.
      />

      {/* Name of Patient */}
      <View style={styles.profileContainer}>
        <Text style={styles.nameTextStyle}>{firstName} {lastName}</Text>
        </View>

      {/* Name of Patient */}
    <View style={styles.profileContainer}>
      <Text style={styles.nameTextStyle}>{address}</Text>
      </View>


        <View style={styles.upcomingItems}>
          {/* This is where the Meds and Immunization will go */}
          <Text>Meds</Text>
          <Text>Immunization</Text>
          
        </View>
      </View>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
    profileContainer : {
      backgroundColor: '#F75050',
      width: 300,
      borderRadius: 10,
      alignSelf: 'center',
      height: 60,
      marginTop: 30
    },
    nameTextStyle : {
      color: 'white',
      fontSize: 30,
      alignSelf: 'center',
      paddingTop: 10
    },
    helloTextStyle : {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 50
    },
    imageContainer : {
      marginTop: 20,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      shadowOpacity: 0.3,
      shadowRadius: 5,  
      elevation: 3,
      height: 232,
      width: 232,
      alignSelf: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff'
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
  });