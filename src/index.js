import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

var cards = [];

fetch('http://localhost:3000/cards.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data
  data.forEach(element => {
     cards.push(element);
     console.log(element);
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App cardsArray={cards}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}).catch(err => {
  // Do something for an error here
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <><p>JSON data not available. Error: {err}.</p></>
    </React.StrictMode>
  );
});


