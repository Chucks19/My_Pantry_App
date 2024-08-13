// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_YFXBLgT5uYXAKD_Dwex6Pk01r--dFlU",
  authDomain: "pantry-headstarter-13b56.firebaseapp.com",
  projectId: "pantry-headstarter-13b56",
  storageBucket: "pantry-headstarter-13b56.appspot.com",
  messagingSenderId: "920193893272",
  appId: "1:920193893272:web:aa4c06c55e0dbc630561ed",
  measurementId: "G-ZE76B1L41Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Firebase Analytics (for browser only)
if (typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}

export {  db };