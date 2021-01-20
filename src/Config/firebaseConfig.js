import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDmgWXWNb1dzhHHPCkH-Ca5ixZcMM9-G94",
    authDomain: "cool-cab-ec0cd.firebaseapp.com",
    databaseURL: "https://cool-cab-ec0cd-default-rtdb.firebaseio.com",
    projectId: "cool-cab-ec0cd",
    storageBucket: "cool-cab-ec0cd.appspot.com",
    messagingSenderId: "651456488211",
    appId: "1:651456488211:web:f2fad03f707211255370e6",
    measurementId: "G-YS4GZJYNZB"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;