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
    <div>
      <Menu
        width={'100vw'}
        right
        customCrossIcon={<FontAwesomeIcon size="2x" icon={faTimes} />}
        customBurgerIcon={false}
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        <Link onClick={() => closeMenu()} className="menu-item" to="/login">
          Login
        </Link>
        <Link onClick={() => closeMenu()} className="menu-item" to="/sign-up">
          Register
        </Link>
        <Link onClick={() => closeMenu()} className="menu-item" to="/login">
          Login
        </Link>
        <Link onClick={() => closeMenu()} className="menu-item" to="/sign-up">
          Register
        </Link>
      </Menu>
      <div onClick={() => toggleMenu()} className="nav-menu-button">
        <Link to="/profile">
          <FontAwesomeIcon size="lg" icon={faBars} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
