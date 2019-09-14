import React from 'react';
import './scss/index.scss';
import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import HomeHeroImage from './components/HomeHeroImage.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <HomeHeroImage />
    </div>
  );
}

export default App;
