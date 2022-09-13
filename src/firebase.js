// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaU5OBOxveVFXI1hV6_CnlWeikc8wcglM",
  authDomain: "spiceez.firebaseapp.com",
  projectId: "spiceez",
  storageBucket: "spiceez.appspot.com",
  messagingSenderId: "676487353936",
  appId: "1:676487353936:web:c90e77851a1a6c24fb2355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);