import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Modules/store.js';
import Home from './Components/Home.js';
import './Styles/App.css';

window.store = store;

render(
  <Provider store={ store }>
    <Home/>
  </Provider>,
  document.getElementById('root')
);