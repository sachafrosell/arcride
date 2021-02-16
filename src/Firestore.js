import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseKey = "AIzaSyBNkmXESRGm930ZV9TNlfGNIlWQr-z3e10"

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "arc-ride-global.firebaseapp.com",
  projectId: "arc-ride-global",
  storageBucket: "arc-ride-global.appspot.com",
  messagingSenderId: "622370080586",
  appId: "1:622370080586:web:0fee3f88257ef14438a3b3",
  measurementId: "G-TDG5DM1CSH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
