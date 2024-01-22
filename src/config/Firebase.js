// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD9RuL8J7TnS7_VSzDA3FqgKh3E2maBaA",
  authDomain: "ronaldomessi-b2fcc.firebaseapp.com",
  projectId: "ronaldomessi-b2fcc",
  storageBucket: "ronaldomessi-b2fcc.appspot.com",
  messagingSenderId: "206565596340",
  appId: "1:206565596340:web:3ce85ef003ad96c5900be1",
  measurementId: "G-79VE3HV15Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();