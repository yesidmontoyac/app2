// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0naSAljRF_ZNWqSpv4ozmBDrnp2wUZkI",
  authDomain: "tarea-c4192.firebaseapp.com",
  databaseURL: "https://tareas.firebaseio.com",
  projectId: "tarea-c4192",
  storageBucket: "tarea-c4192.appspot.com",
  messagingSenderId: "915124355445",
  appId: "1:915124355445:web:c4ae91253bb97e3283533c",
  measurementId: "G-QTXWTSJRCP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {firebase, db}