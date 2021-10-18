import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

/*
ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
*/
