import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leagues from './pages/Leagues';
import LiveBet from './pages/LiveBet';
import NextBet from './pages/NextBet';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/leagues' element={<Leagues />} />
        <Route exact path='/livebet' element={<LiveBet />} />
        <Route exact path='/nextbet' element={<NextBet />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
