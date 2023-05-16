import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXSC-n3Wr9YaXlsaRoVVEJqzcnJC1q0hM",
  authDomain: "auth-development-c1c83.firebaseapp.com",
  projectId: "auth-development-c1c83",
  storageBucket: "auth-development-c1c83.appspot.com",
  messagingSenderId: "1037824307124",
  appId: "1:1037824307124:web:3e7ea8b2eec3e2c078cce1"
}

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()

export default app;