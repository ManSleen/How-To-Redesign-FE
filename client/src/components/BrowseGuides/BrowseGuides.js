import React from 'react';

import FloppyEmoji from '../../assets/icons/FloppyEmoji';
import Palette from '../../assets/icons/Palette';
import Tent from '../../assets/icons/Tent';
import PizzaEmoji from '../../assets/icons/PizzaEmoji';
import GuideCard from './GuideCard';

const BrowseGuides = () => {
  return (
    <div className="guide-form-container">
      <h3>Browse Guides</h3>
      <div className="guide-category-section tech">
        <h4>Tech</h4>
        <FloppyEmoji />
        <div className="guides-scroll-container">
          <GuideCard />
        </div>
      </div>
      <div className="guide-category-section craft">
        <h4>Craft</h4>
        <Palette />
        <div className="guides-scroll-container"></div>
      </div>
      <div className="guide-category-section outdoors">
        <h4>Outdoors</h4>
        <Tent />
        <div className="guides-scroll-container"></div>
      </div>
      <div className="guide-category-section food">
        <h4>Food</h4>
        <PizzaEmoji />
        <div className="guides-scroll-container"></div>
      </div>
    </div>
  );
};

export default BrowseGuides;
