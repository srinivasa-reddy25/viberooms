import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase configuration object
 * Contains API keys and project settings
 */
const firebaseConfig = {
  apiKey: "AIzaSyBKZQvRMP0s279SpU-3AMAlJxtAkbGsSsQ",
  authDomain: "vibelogin-4b1a5.firebaseapp.com",
  projectId: "vibelogin-4b1a5",
  storageBucket: "vibelogin-4b1a5.firebasestorage.app",
  messagingSenderId: "15278371308",
  appId: "1:15278371308:web:5f42369f3135b79d2350c9",
  measurementId: "G-4B7FG0NXHC"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
const auth = getAuth(app);

// Initialize Google auth provider
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore database
const db = getFirestore(app);

// Export Firebase services
export { auth, googleProvider, db };