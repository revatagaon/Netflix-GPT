// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl1Xt8iEJXrXT-xYaeI0GiXuvKpgtGw0Q",
  authDomain: "netflixgpt-c74f1.firebaseapp.com",
  projectId: "netflixgpt-c74f1",
  storageBucket: "netflixgpt-c74f1.appspot.com",
  messagingSenderId: "634428704846",
  appId: "1:634428704846:web:4d00fa78717158d4125b1f",
  measurementId: "G-1X3TGF8B68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();