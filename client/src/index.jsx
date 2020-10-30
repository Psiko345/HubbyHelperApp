import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Auth0Provider>

      <App />

    </Auth0Provider>

  </Router>,
  document.getElementById('root')

);


serviceWorker.unregister();
