// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrl2aDdcx0YMuxHAxk674rG51kycOSfDU",
  authDomain: "yt-73517.firebaseapp.com",
  projectId: "yt-73517",
  storageBucket: "yt-73517.appspot.com",
  messagingSenderId: "9704599890",
  appId: "1:9704599890:web:9e29594dcd1853aae3ca8b",
  measurementId: "G-M7CT2R4BYC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
