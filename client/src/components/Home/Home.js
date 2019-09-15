import React from 'react';

import HomeHeroImage from './HomeHeroImage.js';
import HomeEmojiDivider from './HomeEmojiDivider.js';
import HomepageDescription from './HomepageDescription.js';
import ActionButton from '../../assets/buttons/ActionButton.js';

const Home = () => {
  return (
    <div>
      <HomeHeroImage />
      <HomeEmojiDivider />
      <HomepageDescription />
      <ActionButton text="Get Started" />
    </div>
  );
};

export default Home;
