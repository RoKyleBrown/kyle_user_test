import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
 
});

window.axios = axios;