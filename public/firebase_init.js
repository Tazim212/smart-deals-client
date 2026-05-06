// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRRFnc8fHYbmB9xllSAg0YQbIvELEudF4",
  authDomain: "smart-deals-app-e918a.firebaseapp.com",
  projectId: "smart-deals-app-e918a",
  storageBucket: "smart-deals-app-e918a.firebasestorage.app",
  messagingSenderId: "1086345302443",
  appId: "1:1086345302443:web:bf4d7fa384fc5872f702ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)