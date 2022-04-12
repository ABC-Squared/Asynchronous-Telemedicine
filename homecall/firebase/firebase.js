import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
import "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDLQ4jXOh0dgFm2XOQIDzbE9h6qaXauYzM",
    authDomain: "async-telemed.firebaseapp.com",
    databaseURL: "https://async-telemed-default-rtdb.firebaseio.com",
    projectId: "async-telemed",
    storageBucket: "async-telemed.appspot.com",
    messagingSenderId: "543314374404",
    appId: "1:543314374404:web:9b8142f09a53c0e71faa51"
};

initializeApp(firebaseConfig)