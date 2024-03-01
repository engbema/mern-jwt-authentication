// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1c80c.firebaseapp.com",
  projectId: "mern-auth-1c80c",
  storageBucket: "mern-auth-1c80c.appspot.com",
  messagingSenderId: "405934042664",
  appId: "1:405934042664:web:823efa46ecc7d7a9d78f1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
