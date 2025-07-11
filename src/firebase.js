// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq85kRe9K4v373qkIMXOoiyWu3-JZG93M",
  authDomain: "adityatechndevoops.firebaseapp.com",
  projectId: "adityatechndevoops",
  storageBucket: "adityatechndevoops.firebasestorage.app",
  messagingSenderId: "529661208900",
  appId: "1:529661208900:web:952f82f1e926cea4bc8f11",
  measurementId: "G-4WS9K7KG38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);