import React from 'react';
import './scss/index.scss';
import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import HomeHeroImage from './components/HomeHeroImage.js';
import HomeEmojiDivider from './components/HomeEmojiDivider';
import HomepageDescription from './components/HomepageDescription';
import ActionButton from './assets/buttons/ActionButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <HomeHeroImage />
      <HomeEmojiDivider />
      <HomepageDescription />
      <ActionButton text="Get Started" />
    </div>
  );
}

export default App;
