import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NCUKPHWSJDswzlp2N9A9YuH1rJi-WMA",
  authDomain: "tvmaze-app-9b776.firebaseapp.com",
  databaseURL:
    "https://tvmaze-app-9b776-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tvmaze-app-9b776",
  storageBucket: "tvmaze-app-9b776.appspot.com",
  messagingSenderId: "679366112719",
  appId: "1:679366112719:web:9ac6d383d23aa076470eba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = getDatabase(app);
