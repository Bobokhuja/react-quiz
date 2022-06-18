import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBKT44vf3a3nlJkNzO-OsqpmzRnMrEJ0JM",
  authDomain: "react-quiz-b8dd0.firebaseapp.com",
  databaseURL: "https://react-quiz-b8dd0-default-rtdb.firebaseio.com",
  projectId: "react-quiz-b8dd0",
  storageBucket: "react-quiz-b8dd0.appspot.com",
  messagingSenderId: "256718309702",
  appId: "1:256718309702:web:9d178f45f8dfeaa7247d47",
  measurementId: "G-BS6FN7R4DS"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);