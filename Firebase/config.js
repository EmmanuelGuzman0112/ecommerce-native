// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqmef2R4e-WI1oXoeidA-3G2UvdnzMd1c",
  authDomain: "ecommerce-native-b0115.firebaseapp.com",
  projectId: "ecommerce-native-b0115",
  storageBucket: "ecommerce-native-b0115.appspot.com",
  messagingSenderId: "897610424890",
  appId: "1:897610424890:web:c77c227275683de592cb03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);