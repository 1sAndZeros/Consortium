import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const LoggedInRedirect = () => {
  let auth = false;
  localStorage.token ? (auth = true) : (auth = false);
  return auth ? <Navigate to='/'/> : <Outlet />;
};

export default LoggedInRedirect;
