// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB530ocjJkyANiOUrADLuogsuW5Ne8ZI0s",
  authDomain: "test-project-mileston-9.firebaseapp.com",
  projectId: "test-project-mileston-9",
  storageBucket: "test-project-mileston-9.firebasestorage.app",
  messagingSenderId: "140355692283",
  appId: "1:140355692283:web:03fa1b7a7426c20700725e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth