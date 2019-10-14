import React from 'react';

import HomeHeroImage from './HomeHeroImage.js';
import HomeEmojiDivider from './HomeEmojiDivider.js';
import HomepageDescription from './HomepageDescription.js';
import ActionButton from '../../assets/buttons/ActionButton.js';

const Home = ({ history }) => {
  return (
    <div className="home-container">
      <HomeHeroImage />

      <div className="homepage">
        <HomeEmojiDivider />
        <HomepageDescription />
        <ActionButton history={history} routeTo="/sign-up" text="Get Started" />
      </div>
    </div>
  );
};

export default Home;
