import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header.js';
import UserProfileGuideSection from './UserProfileGuideSection.js';

const UserProfile = ({ user }) => {
  if (user) {
    return (
      <div>
        <Header user={user} />
        <UserProfileGuideSection />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {}
)(UserProfile);
