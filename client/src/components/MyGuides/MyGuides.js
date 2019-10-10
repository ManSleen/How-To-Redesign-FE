import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MyGuideCard from './MyGuideCard';

import { getGuidesByUserId } from '../../store/actions';

const MyGuides = ({ getGuidesByUserId, user, guides }) => {
  useEffect(() => {
    getGuidesByUserId(user.id);
  }, [getGuidesByUserId, user.id]);
  return (
    <div className="my-guides-container">
      <h2>My Guides</h2>
      {guides.map(guide => {
        return <MyGuideCard key={guide.id} guide={guide} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    guides: state.currentUsersGuides
  };
};

export default connect(
  mapStateToProps,
  { getGuidesByUserId }
)(MyGuides);
