// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  piKey: process.env.FIREBASE,
  authDomain: "blogapp-70d12.firebaseapp.com",
  projectId: "blogapp-70d12",
  storageBucket: "blogapp-70d12.appspot.com",
  messagingSenderId: "597006170651",
  appId: "1:597006170651:web:3266a0d194ec95067216be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);