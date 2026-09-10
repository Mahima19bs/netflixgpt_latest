import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa8YsDhvwi_TY1m3_qYPIOl5aXFWkaXO4",
  authDomain: "netflixgpt-79e94.firebaseapp.com",
  projectId: "netflixgpt-79e94",
  storageBucket: "netflixgpt-79e94.firebasestorage.app",
  messagingSenderId: "1021903188619",
  appId: "1:1021903188619:web:11c52d7a34b52339545a8e",
  measurementId: "G-S7TF3S0NX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);