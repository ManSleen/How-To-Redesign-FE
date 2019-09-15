import React from 'react';
import DividerSquiggle from '../../assets/icons/DividerSquiggle';

const AltHeroImage = ({ text }) => {
  return (
    <div className="alt-hero-image">
      <h2>{text}</h2>
      <DividerSquiggle color="white" />
    </div>
  );
};

export default AltHeroImage;
