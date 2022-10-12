// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfipC2bZQvcaaFKg8ogtUTMBtnHqJyMbY",
  authDomain: "pane-chat.firebaseapp.com",
  projectId: "pane-chat",
  storageBucket: "pane-chat.appspot.com",
  messagingSenderId: "576484839622",
  appId: "1:576484839622:web:d313ae78d844dca2efc7c7",
  measurementId: "G-7Y0ZY0JN76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);