import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKT44vf3a3nlJkNzO-OsqpmzRnMrEJ0JM",
  authDomain: "react-quiz-b8dd0.firebaseapp.com",
  databaseURL: "https://react-quiz-b8dd0-default-rtdb.firebaseio.com",
  projectId: "react-quiz-b8dd0",
  storageBucket: "react-quiz-b8dd0.appspot.com",
  messagingSenderId: "256718309702",
  appId: "1:256718309702:web:2a9f9ec3068633f0247d47",
  measurementId: "G-KE1JW7T1WD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);