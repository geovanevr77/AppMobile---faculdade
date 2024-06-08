// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOkZyyceCn-OyzWdvYDZnjhW2FrAY249c",
  authDomain: "applaundry-c20d4.firebaseapp.com",
  databaseURL: "https://applaundry-c20d4-default-rtdb.firebaseio.com",
  projectId: "applaundry-c20d4",
  storageBucket: "applaundry-c20d4.appspot.com",
  messagingSenderId: "784689426533",
  appId: "1:784689426533:web:0d118dc56c09b73ae3168c"
};

// Initialize Firebase
if(!firebase.apps.length)
    {
        firebase.initializeApp(firebaseConfig)
    }

    export default firebase;