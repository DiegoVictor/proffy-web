import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/signin" />;
  }

  return children;
}

export default RequireAuth;
