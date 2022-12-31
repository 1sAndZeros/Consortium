import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Home from './pages/Home';
import Leagues from './pages/Leagues';
import LiveBet from './pages/LiveBet';
import NextBet from './pages/NextBet';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import LoggedInRedirect from './utils/LoggedInRedirect';

function App() {

  function loggedInRedirect(to, from, next) {
    if (localStorage.token) {
      next('/');
    } else {
      next();
    }
  }

  function isLoggedIn(to, from, next) {
    if (localStorage.token) {
      next();
    } else {
      next('/');
    }
  }

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route element={<LoggedInRedirect />}>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path='/leagues' element={<Leagues />} />
          <Route exact path='/livebet' element={<LiveBet />} />
          <Route exact path='/nextbet' element={<NextBet />} />
          <Route exact path='/settings' element={<Settings />} />
        </Route>
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
