// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0IphB9Y0doq6q2NJoRvZvNGmn2NXah94",
  authDomain: "e-commerce-c4.firebaseapp.com",
  projectId: "e-commerce-c4",
  storageBucket: "e-commerce-c4.appspot.com",
  messagingSenderId: "959885628565",
  appId: "1:959885628565:web:3e91fa69bd7b84cb31779c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
