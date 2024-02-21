import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/css/style.css' ;
import '../src/css/medea.css' ;
import '../src/css/animate.css' ;
import '../src/fonts/font-awesome.css';
import '../src/css/bootstrap.min.css' ;
import '../src/css/bootstrap.css' ;
import 'jquery';










ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
