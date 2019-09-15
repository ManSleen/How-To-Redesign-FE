import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import UserProfile from './components/UserProfile/UserProfile.js';

import './scss/index.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={UserProfile} />
      <Footer />
    </div>
  );
}

export default App;
