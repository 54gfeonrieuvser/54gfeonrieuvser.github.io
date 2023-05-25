// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-KIs58o6iYJjFn3Q5q68sL4OxIVFQooY",
  authDomain: "refirestock.firebaseapp.com",
  projectId: "refirestock",
  storageBucket: "refirestock.appspot.com",
  messagingSenderId: "1042959581706",
  appId: "1:1042959581706:web:588672d44af236b9aad5f3"
};

// Initialize Firebase
const app = () => {
    return initializeApp(firebaseConfig);
}