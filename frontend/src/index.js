import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import axios from 'axios';
import configureStore from './store/store';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

});

window.axios = axios;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
