// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ5ufOWGWdZ8pajMXAuecOB47SI4XBxZk",
  authDomain: "router-firebase-integrat-f9793.firebaseapp.com",
  projectId: "router-firebase-integrat-f9793",
  storageBucket: "router-firebase-integrat-f9793.appspot.com",
  messagingSenderId: "796487821112",
  appId: "1:796487821112:web:3112e8efa7b6baa1ef83cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;