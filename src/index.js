import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Modules/store.js';
import App from './Components/App.js';
import './Styles/App.css';

window.store = store;

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);