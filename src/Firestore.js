import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseKey = "AIzaSyBpL2-gzr-BCAc8acMpAT5qxibNGqp2zNo"

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "arc-ride-database.firebaseapp.com",
  projectId: "arc-ride-database",
  storageBucket: "arc-ride-database.appspot.com",
  messagingSenderId: "981299772576",
  appId: "1:981299772576:web:48f3aea9de7e5a29581dc5",
  measurementId: "G-CZZNEFCEZD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
