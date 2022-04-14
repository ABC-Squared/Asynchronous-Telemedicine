import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyDLQ4jXOh0dgFm2XOQIDzbE9h6qaXauYzM",
    authDomain: "async-telemed.firebaseapp.com",
    databaseURL: "https://async-telemed-default-rtdb.firebaseio.com",
    projectId: "async-telemed",
    storageBucket: "async-telemed.appspot.com",
    messagingSenderId: "543314374404",
    appId: "1:543314374404:web:9b8142f09a53c0e71faa51"
});
export const auth = fire.auth();
export const db = fire.firestore();
export default {
  fire,
};