import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavBar = () => {
  return (
    <div className="sub-nav-bar-container">
      <div className="sub-nav-category">
        <NavLink to="/browse">
          <p>Tech</p>
        </NavLink>
      </div>
      <div className="sub-nav-category">
        <NavLink to="/browse">
          <p>Craft</p>
        </NavLink>
      </div>
      <div className="sub-nav-category">
        <NavLink to="/browse">
          <p>Outdoors</p>
        </NavLink>
      </div>
      <div className="sub-nav-category">
        <NavLink to="/browse">
          <p>Food</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SubNavBar;
