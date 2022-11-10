import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import './stylesheets/index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import {Helmet} from "react-helmet";

const root = createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



root.render(
    // <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    // {/* </React.StrictMode>, */}
    // document.getElementById('root')
);

serviceWorkerRegistration.unregister();
