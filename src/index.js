import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './stylesheets/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
const root = createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (e) =>{
  console.log("Login",e)
}

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    onRedirectCallback={onRedirectCallback}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);


serviceWorkerRegistration.unregister();
