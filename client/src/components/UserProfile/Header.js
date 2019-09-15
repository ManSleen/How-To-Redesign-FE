import React from 'react';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserAvatar from './UserAvatar';
import DividerSquiggle from '../../assets/icons/DividerSquiggle';

const Header = () => {
  return (
    <div>
      <div className="user-profile-header-container">
        <UserAvatar />
        <div className="user-profile-info">
          <h3>Miyah Myles</h3>
          <h4>miyah.myles</h4>
          <h5>miyah.myles@gmail.com</h5>
        </div>
        <div>
          <FontAwesomeIcon size="lg" icon={faPencilAlt} />
        </div>
      </div>
      <DividerSquiggle color="black" />
    </div>
  );
};

export default Header;
