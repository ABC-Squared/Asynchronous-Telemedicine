import {Alert} from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


export async function registration(email, password, lastName, firstName, address, medications, immunizations, doctorCode) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("patients") // Adding the user to the patients
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        userID: currentUser.uid,
        lastName: lastName,
        firstName: firstName,
        address: address,
        medications: medications,
        immunizations: immunizations,
        doctorCode: doctorCode
      });
  Alert.alert('Successfully registered!', err.message);
  } catch (err) {
    console.error("error", err.message)
  }
}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function postAppointment(appointmentName) {
  const currentUser = firebase.auth().currentUser;

  const db = firebase.firestore();
  db.collection("appointments").add({
    name: appointmentName,
    userID: currentUser.uid,
    apptDate: new Date(),
    isComplete: false
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    Alert.alert('Appointment successfully booked!');
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
    Alert.alert('There was an error:', error.message);
  });
}