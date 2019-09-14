import React from 'react';
import './scss/index.scss';
import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import HomeHeroImage from './components/HomeHeroImage.js';
import HomeEmojiDivider from './components/HomeEmojiDivider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <HomeHeroImage />
      <HomeEmojiDivider />
    </div>
  );
}

export default App;
