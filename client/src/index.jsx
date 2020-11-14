import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth0ProviderWithHistory from './components/Auth0/auth0-provider-with-history';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>

      <App />

    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')

);


serviceWorker.unregister();
