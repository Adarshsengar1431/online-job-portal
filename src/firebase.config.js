// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOq3Bm_tPofgzCsmdldEACutfW6cc4QpQ",
  authDomain: "online-job-portal-ae0f6.firebaseapp.com",
  projectId: "online-job-portal-ae0f6",
  storageBucket: "online-job-portal-ae0f6.firebasestorage.app",
  messagingSenderId: "1021397362245",
  appId: "1:1021397362245:web:6c6de3fdffb1398860a52c",
  measurementId: "G-XTP7JQ9CMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}; 