// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLuNWyNSOnhWLO-Z_4ShAYWUV8WWyaBO8",
  authDomain: "chatapp-c36a4.firebaseapp.com",
  projectId: "chatapp-c36a4",
  storageBucket: "chatapp-c36a4.appspot.com",
  messagingSenderId: "351172850283",
  appId: "1:351172850283:web:9099861f402f7dc59f372e",
  measurementId: "G-N8MB23NXD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;