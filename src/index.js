import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './stylesheets/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';
const root = createRoot(document.getElementById('root'));

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (redirect_uri) => {
    navigate(redirect_uri || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};


root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);


serviceWorkerRegistration.unregister();
