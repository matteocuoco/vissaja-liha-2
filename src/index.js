import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from "./components/Navbar";

ReactDOM.render(
  <Auth0Provider
    domain="dev-dpeiw9mf.eu.auth0.com"
    clientId="CMSVnBuUhA9Wo4H6lNVmKiJ0taHYHh3f"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  </Auth0Provider>,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
