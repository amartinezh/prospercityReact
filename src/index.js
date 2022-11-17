import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Mi from './components/my_prosper/mi';
import reportWebVitals from './reportWebVitals';
import Calcula from './components/Calcula/calculaComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Mi />
    <Calcula />
  </React.StrictMode>
);

reportWebVitals();
