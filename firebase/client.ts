// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";

import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMewqKh2YV7WQJkwJL-DCN914grz0zA_U",
  authDomain: "mockmate-be9db.firebaseapp.com",
  projectId: "mockmate-be9db",
  storageBucket: "mockmate-be9db.firebasestorage.app",
  messagingSenderId: "524772876705",
  appId: "1:524772876705:web:47ac16d5511b6b0cc26be0",
  measurementId: "G-MEXCL7SMJ0"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);