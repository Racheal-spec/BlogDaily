// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC54YvV5rVhLFiEUYg6W3-7Beg5BB3vqD4",
  authDomain: "blogdaily-c8abb.firebaseapp.com",
  projectId: "blogdaily-c8abb",
  storageBucket: "blogdaily-c8abb.appspot.com",
  messagingSenderId: "865177938625",
  appId: "1:865177938625:web:b68ac765d5740b20ba4240",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
