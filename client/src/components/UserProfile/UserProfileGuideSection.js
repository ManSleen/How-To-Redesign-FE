import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  faEye,
  faUserCircle,
  faPlus,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { logout } from '../../store/actions';

const UserProfileGuideSection = ({ logout }) => {
  return (
    <div className="guide-section-container">
      <Link className="add-guide link" to="/create-guide">
        <div>
          <FontAwesomeIcon size="2x" icon={faPlus} />
          <h4>Create a Guide</h4>
        </div>
      </Link>
      <Link className="browse link" to="/browse">
        <div>
          <FontAwesomeIcon size="2x" icon={faEye} />

          <h4>Browse Guides</h4>
        </div>
      </Link>
      <Link className="my-guides link" to="/my-guides">
        <div>
          <FontAwesomeIcon size="2x" icon={faUserCircle} />
          <h4>My Guides</h4>
        </div>
      </Link>

      <div onClick={logout} className="guide-section-icon logout">
        <FontAwesomeIcon size="2x" icon={faSignOutAlt} />
        <h4>Log Out</h4>
      </div>
    </div>
  );
};

export default connect(
  null,
  { logout }
)(UserProfileGuideSection);
