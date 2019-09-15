import React from 'react';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserAvatar from './UserAvatar';

const Header = () => {
  return (
    <div className="user-profile-header-container">
      <UserAvatar />
      <div className="user-profile-info">
        <h3>Miyah Myles</h3>
        <h4>miyah.myles@gmail.com</h4>
      </div>
      <div>
        <FontAwesomeIcon size="lg" icon={faPencilAlt} />
      </div>
    </div>
  );
};

export default Header;
