import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMu6NleQ7shCSSzwlfvDQLGfxWiuEHksc",
  authDomain: "zarvis-96892.firebaseapp.com",
  projectId: "zarvis-96892",
  storageBucket: "zarvis-96892.firebasestorage.app",
  messagingSenderId: "974385392201",
  appId: "1:974385392201:web:2d253cc1e1a5bd1f206d98",
  measurementId: "G-PTWLD6NFFV"
};  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
