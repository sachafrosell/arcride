import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';
import 'firebase/analytics';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "arc-ride-test.firebaseapp.com",
  projectId: "arc-ride-test",
  storageBucket: "arc-ride-test.appspot.com",
  messagingSenderId: "230211569448",
  appId: "1:230211569448:web:acd5db22df48c113c2721d",
  measurementId: "G-E4C9YEMZ0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
