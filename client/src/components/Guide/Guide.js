import React from 'react';

import tech1 from '../../assets/images/tech1.jpg';
import Star from '../../assets/icons/Star';
import Heart from '../../assets/icons/Heart';

const Guide = () => {
  return (
    <div className="guide-container">
      <div className="guide-header">
        <h2>Guide Title</h2>
        <p>
          by <span>miyah.myles</span> in <span>Tech</span>
        </p>
        <div className="likes-container">
          <Heart />
          <p>2,064 </p>
          <Star />
          <p>Featured</p>
        </div>
      </div>
      <img className="main-guide-image" src={tech1} />
      <div className="guide-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="guide-step">
        <h3>Step 1: Materials and Tools</h3>
        <div className="guides-scroll-container">
          <img className="guide-image" src={tech1} />
          <img className="guide-image" src={tech1} />
          <img className="guide-image" src={tech1} />
        </div>
      </div>
    </div>
  );
};

export default Guide;
