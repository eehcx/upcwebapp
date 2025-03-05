// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8XGgJezFEuq6HBI043nHh4hBB14H7aTg",
    authDomain: "upc-tabasco-2c495.firebaseapp.com",
    projectId: "upc-tabasco-2c495",
    storageBucket: "upc-tabasco-2c495.firebasestorage.app",
    messagingSenderId: "360535561864",
    appId: "1:360535561864:web:0d184403f58bd4b9c0713d",
    measurementId: "G-KVCP6Z9L37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);