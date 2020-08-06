import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './router';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
