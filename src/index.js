import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Mi from './components/my_prosper/mi';
import Eficientes from './components/eficientes/Eficientes'
import reportWebVitals from './reportWebVitals';
import Calcula from './components/Calcula/calculaComponent';
import Alpha from './components/alpha/Alpha';
import MayusJeison from './components/mayusjeison/MayusJeison';
import { ButtonAlpha } from './components/alpha/ButtonAlpha';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Eficientes />
    <Mi />
    <Calcula />
    <Alpha />
    <ButtonAlpha />     
    <MayusJeison/>
  </React.StrictMode>
);

reportWebVitals();
