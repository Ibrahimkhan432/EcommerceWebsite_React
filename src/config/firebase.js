// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGAGoUxYfRtQ0Ud9wZVZ2wZANgCWf8msw",
  authDomain: "sir-ibrahim-web.firebaseapp.com",
  projectId: "sir-ibrahim-web",
  storageBucket: "sir-ibrahim-web.firebasestorage.app",
  messagingSenderId: "193582353070",
  appId: "1:193582353070:web:bf213f656e852279e2bb3f",
  measurementId: "G-TN1LGCEKNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
