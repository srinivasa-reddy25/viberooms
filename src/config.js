import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider ,signInWithPopup,signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKZQvRMP0s279SpU-3AMAlJxtAkbGsSsQ",
  authDomain: "vibelogin-4b1a5.firebaseapp.com",
  projectId: "vibelogin-4b1a5",
  storageBucket: "vibelogin-4b1a5.firebasestorage.app",
  messagingSenderId: "15278371308",
  appId: "1:15278371308:web:5f42369f3135b79d2350c9",
  measurementId: "G-4B7FG0NXHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();

// Function to handle Google login

const handleGoogleLogin = async(setError) => {
    try{
        const result= await signInWithPopup(auth, googleprovider);
        console.log("User signed in with Google:", result.user);
        setError(null); // Clear any previous errors
    }
    catch(error) {
        console.log(error.message);
        setError("Failed to sign in with Google. Please try again.");
    }
  
};


// handle login with email and password

const handlemailLogin = async(e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try{
        const usercred= await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in with email and password:", usercred.user);
        setError(null); // Clear any previous errors
    }
    catch(error) {
        console.log(error.message);
        setError("Failed to sign in with email and password. Please try again.");
    }
    e.target.reset(); // Reset the form fields after submission
};



export {auth, googleprovider, handleGoogleLogin,handlemailLogin};