import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import Landing from '../pages/Landing';
import Study from '../pages/Study';
import GiveClasses from '../pages/GiveClasses';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RequireAuth from './RequireAuth';
import ForgotPassword from '../pages/ForgotPassword';
import Profile from '../pages/Profile';

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
      <Route
        path="/signup"
        render={() => {
          if (user) {
            return <Redirect to="/" />;
          }
          return <SignUp />;
        }}
      />
      <Route
        path="/forgot"
        render={() => {
          if (user) {
            return <Redirect to="/" />;
          }
          return <ForgotPassword />;
        }}
      />

      <RequireAuth>
        <Route path="/" exact component={Landing} />
      </RequireAuth>
      <RequireAuth>
        <Route path="/study" component={Study} />
      </RequireAuth>
      <RequireAuth>
        <Route path="/give-classes" component={GiveClasses} />
      </RequireAuth>
      <RequireAuth>
        <Route path="/profile" component={Profile} />
      </RequireAuth>
    </BrowserRouter>
  );
}

export default Routes;
