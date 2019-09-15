import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/index.scss';

import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-wrapper">
        <div className="nav-home-button">
          <Link to="/">
            <FontAwesomeIcon size="lg" icon={faHome} />
          </Link>
        </div>
        <h2 className="nav-title">How-To</h2>
        <div className="nav-menu-button">
          <Link to="/profile">
            <FontAwesomeIcon size="lg" icon={faBars} />
          </Link>
        </div>
      </div>
      <div className="nav-bar-divider"> </div>
    </div>
  );
};

export default NavBar;
