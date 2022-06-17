import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //BrowseRouter glavnie komponenet react router kotorii dolzhen obernut vsjo nashe prilozhenie
  //tak govorim reactu chto mi ispolzuem URL marshruti
  //React router pomogaet nam rabotat s stranicami. pri zahodi ssilku on obrabativaet
  // i renderit tolko nuzhnii komponeneti
  //Blagodarja etomu, ne proishodit perezagruzki tseloi stranitsi a tolko opredeljonoi
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

