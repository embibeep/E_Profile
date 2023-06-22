// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKq7yCGtLofh9GpEDh0g48SWVpPKSY24Y",
    authDomain: "eprofile-50e16.firebaseapp.com",
    projectId: "eprofile-50e16",
    storageBucket: "eprofile-50e16.appspot.com",
    messagingSenderId: "705831197254",
    appId: "1:705831197254:web:bfb32bae009f946d438847",
    measurementId: "G-QHEEPGL4YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

