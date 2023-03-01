import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import SignIn from '../pages/SignIn';

function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Route
        path="/signin"
        render={() => {
          if (user) {
            return <Redirect to="/" />;
          }
          return <SignIn />;
        }}
      />
    </BrowserRouter>
  );
}

export default Routes;
