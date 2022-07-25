import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PictureDisp from './PictureDisp';
// import PictureDisp from './PictureDisp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <p><PictureDisp /></p>
    <h1>WELCOME TO DOTA 2 CHARADES</h1>
    <p>Dota 2 charades is a WIP browser based guessing game in the (very) early stages of development.</p>
    <p>The aim is to try to guess the names of as many Dota 2 ability icons and sounds as possible within the time limit!</p>
    <p>Click the start button below to start guessing!</p>
    <App />



  </React.StrictMode>

);

// 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
