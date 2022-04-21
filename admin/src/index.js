import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <BrowserRouter basename="/admin">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();