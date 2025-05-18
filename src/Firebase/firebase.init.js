// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTbHkP_GfUA4x8go_wqmsEDao0ncFcTxk",
  authDomain: "coffee-store-practice-1.firebaseapp.com",
  projectId: "coffee-store-practice-1",
  storageBucket: "coffee-store-practice-1.firebasestorage.app",
  messagingSenderId: "1040550540358",
  appId: "1:1040550540358:web:d91c655d1d8fd49dd18647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);