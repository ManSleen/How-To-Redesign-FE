import React from 'react';
import './scss/index.scss';
import NavBar from './components/NavBar.js';
import SubNavBar from './components/SubNavBar.js';
import HomeHeroImage from './components/HomeHeroImage';
import HomeEmojiDivider from './components/HomeEmojiDivider';
import HomepageDescription from './components/HomepageDescription';
import ActionButton from './assets/buttons/ActionButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SubNavBar />
      <HomeHeroImage />
      <HomeEmojiDivider />
      <HomepageDescription />
      <ActionButton text="Get Started" />
      <Footer />
    </div>
  );
}

export default App;
