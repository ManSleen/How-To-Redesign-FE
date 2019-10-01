import React from 'react';
import { Link } from 'react-router-dom';

import {
  faEye,
  faUserCircle,
  faPlus,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserProfileGuideSection = () => {
  return (
    <div className="guide-section-container">
      <div className="guide-section-icon browse">
        <FontAwesomeIcon size="2x" icon={faEye} />

        <h4>Browse Guides</h4>
      </div>
      <div className="guide-section-icon my-guides">
        <FontAwesomeIcon size="2x" icon={faUserCircle} />
        <h4>My Guides</h4>
      </div>

      <Link className="add-guide link" to="/create-guide">
        <div>
          <FontAwesomeIcon size="2x" icon={faPlus} />
          <h4>Add A Guide</h4>
        </div>
      </Link>

      <div className="guide-section-icon logout">
        <FontAwesomeIcon size="2x" icon={faSignOutAlt} />
        <h4>Log Out</h4>
      </div>
    </div>
  );
};

export default UserProfileGuideSection;
