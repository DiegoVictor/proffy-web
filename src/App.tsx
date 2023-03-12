import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './assets/styles/global';
import { AuthProvider } from './hooks/auth';

import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </AuthProvider>
  );
}

export default App;
