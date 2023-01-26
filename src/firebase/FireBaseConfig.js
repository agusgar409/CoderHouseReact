// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD__ZrLN3cqz8UGG59DgEAxHV1zbvD0_P0",
  authDomain: "coderhouse-ecommerce-394c8.firebaseapp.com",
  projectId: "coderhouse-ecommerce-394c8",
  storageBucket: "coderhouse-ecommerce-394c8.appspot.com",
  messagingSenderId: "671282633577",
  appId: "1:671282633577:web:a625ecc1189acbb3f3bbf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)