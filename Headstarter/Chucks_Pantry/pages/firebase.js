import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
require('dotenv').config();


import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyD_YFXBLgT5uYXAKD_Dwex6Pk01r--dFlU",
  authDomain: "pantry-headstarter-13b56.firebaseapp.com",
  projectId: "pantry-headstarter-13b56",
  storageBucket: "pantry-headstarter-13b56.appspot.com",
  messagingSenderId: "920193893272",
  appId: "1:920193893272:web:815807685b231fa20561ed",
  measurementId: "G-10FWPBNR0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Firebase Analytics (for browser only)
if (typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}