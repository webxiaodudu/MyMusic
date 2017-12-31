import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App.js';
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);