// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCfxP57iUIuRLXTKpaeQzOLt1gR9dFvPk",
  authDomain: "sesion5112.firebaseapp.com",
  projectId: "sesion5112",
  storageBucket: "sesion5112.firebasestorage.app",
  messagingSenderId: "732868125795",
  appId: "1:732868125795:web:d7ebc10e44b0926a3fc456",
  measurementId: "G-KCMDBJDHY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
 export const db = getFirestore(app)