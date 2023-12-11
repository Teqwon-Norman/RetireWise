import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-t7qwadx5d8z4v2ib.us.auth0.com"
    clientId="7rj3EB1K0tr9s4xb6BFsTYzweXDTQGlB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);
=======

import './index.css';
>>>>>>> refs/remotes/origin/main

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${window.location.origin}/retirement-accounts`
  }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);