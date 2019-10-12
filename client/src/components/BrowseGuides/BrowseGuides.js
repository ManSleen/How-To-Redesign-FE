import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FloppyEmoji from '../../assets/icons/FloppyEmoji';
import Palette from '../../assets/icons/Palette';
import Tent from '../../assets/icons/Tent';
import PizzaEmoji from '../../assets/icons/PizzaEmoji';
import GuideCard from './GuideCard';
import Shrug from '../../assets/icons/Shrug';

import { getGuides } from '../../store/actions';

const BrowseGuides = ({ getGuides, guides, isLoading }) => {
  useEffect(() => {
    getGuides();
  }, [getGuides]);

  const filterGuides = filter => {
    if (guides && !isLoading) {
      const matchingGuides = guides
        .filter(el => el.guide_category.toLowerCase() === filter)
        .map(guide => {
          return <GuideCard key={guide.id} guide={guide} />;
        });
      return matchingGuides;
    }
  };

  if (guides && !isLoading) {
    return (
      <div className="guide-form-container">
        <h3>Browse Guides</h3>
        <div className="guide-category-section tech">
          <h4>Tech</h4>
          <FloppyEmoji />
          <div className="guides-scroll-container">{filterGuides('tech')}</div>
        </div>
        <hr />
        <div className="guide-category-section craft">
          <h4>Craft</h4>
          <Palette />
          <div className="guides-scroll-container">{filterGuides('craft')}</div>
          <div className="guides-scroll-container"></div>
        </div>
        <hr />
        <div className="guide-category-section outdoors">
          <h4>Outdoors</h4>
          <Tent />
          <div className="guides-scroll-container">
            {filterGuides('outdoors')}
          </div>
          <div className="guides-scroll-container"></div>
        </div>
        <hr />
        <div className="guide-category-section food">
          <h4>Food</h4>
          <PizzaEmoji />
          <div className="guides-scroll-container">{filterGuides('food')}</div>
        </div>
        <hr />
        <div className="guide-category-section everything-else">
          <h4>Everything Else</h4>
          <Shrug />
          <div className="guides-scroll-container">{filterGuides('')}</div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    guides: state.guides,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getGuides }
)(BrowseGuides);
