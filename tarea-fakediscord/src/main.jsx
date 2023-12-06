import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuPtMC86Vx60DkKQNn3sBSG_lNn1a6YXU",
    authDomain: "fakediscord-dc392.firebaseapp.com",
    projectId: "fakediscord-dc392",
    storageBucket: "fakediscord-dc392.appspot.com",
    messagingSenderId: "141595338582",
    appId: "1:141595338582:web:2043ccfbd29966a36e58f7"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
