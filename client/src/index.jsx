import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-5ytxbnts.au.auth0.com"
    clientId="sbl2r62UXIX1URnJJBQnppE4vobMZoHx"
    redirectUri={window.location.origin}
  >

    <App />

  </Auth0Provider>,
  document.getElementById('root')

);


serviceWorker.unregister();
