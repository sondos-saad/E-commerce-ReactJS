import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-qoaj0sypyupo5nc4.us.auth0.com"
    clientId="QgFNO9RMzWo5flR7E3bUvh2WMkB9F0tT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
