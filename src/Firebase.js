// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAJNW3MgCjKADY_9pL1i06kL_jQ5rurUYo",
  authDomain: "chat-e9af6.firebaseapp.com",
  projectId: "chat-e9af6",
  storageBucket: "chat-e9af6.appspot.com",
  messagingSenderId: "614795875903",
  appId: "1:614795875903:web:fc484d1d7216540e6a4a8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()