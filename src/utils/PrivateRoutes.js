import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let auth = false;
  (localStorage.token) ? (auth = true) : (auth = false);
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
