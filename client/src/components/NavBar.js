import React from 'react';
import '../scss/index.scss';

import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-wrapper">
        <div className="nav-home-button">
          <FontAwesomeIcon size="lg" icon={faHome} />
        </div>
        <h2 className="nav-title">How-To</h2>
        <div className="nav-menu-button">
          <FontAwesomeIcon size="lg" icon={faBars} />
        </div>
      </div>
      <div className="nav-bar-divider"> </div>
    </div>
  );
};

export default NavBar;
