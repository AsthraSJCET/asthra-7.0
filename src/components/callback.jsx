import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom'

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
    console.log(appState)
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + "/workshops"}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

// import React from 'react';
// import { Auth0Provider } from '@auth0/auth0-react';
// import {useNavigate} from 'react-router-dom'

// const Auth0ProviderWithHistory = ({ children }) => {
//   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
//   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

//   const history = useNavigate();

//   const onRedirectCallback = (appState) => {
//     history.push(appState?.returnTo || window.location.pathname);
//     console.log(appState)
//   };

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       redirectUri={window.location.origin + "/workshops"}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0ProviderWithHistory;