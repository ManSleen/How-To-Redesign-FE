import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = state => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(state => !state.menuOpen);
  };

  return (
    <div className="nav-menu-container">
      <Menu
        width={'100vw'}
        right
        customCrossIcon={<FontAwesomeIcon size="3x" icon={faTimes} />}
        customBurgerIcon={false}
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        <Link onClick={() => closeMenu()} className="menu-item" to="/login">
          Login
        </Link>
        <hr />
        <Link onClick={() => closeMenu()} className="menu-item" to="/sign-up">
          Sign Up
        </Link>
        <hr />
        <Link onClick={() => closeMenu()} className="menu-item" to="/profile">
          My Profile
        </Link>
        <hr />
        <Link onClick={() => closeMenu()} className="menu-item" to="/browse">
          Browse Guides
        </Link>
        <hr />
        <Link
          onClick={() => closeMenu()}
          className="menu-item"
          to="/create-guide"
        >
          Create A Guide
        </Link>
      </Menu>
      <div onClick={() => toggleMenu()} className="nav-menu-button">
        <FontAwesomeIcon size="lg" icon={faBars} />
      </div>
    </div>
  );
};

export default Sidebar;
