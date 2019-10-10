import React from 'react';

import userAvatar from '../../assets/images/user-avatar.png';

const UserAvatar = () => {
  return (
    <img alt="user avatar" className="user-profile-avatar" src={userAvatar} />
  );
};

export default UserAvatar;
