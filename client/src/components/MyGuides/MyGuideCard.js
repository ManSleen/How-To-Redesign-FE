import React from 'react';

import { Link } from 'react-router-dom';

import tech1 from '../../assets/images/tech1.jpg';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyGuideCard = () => {
  return (
    <Link to="/guide">
      <div className="my-guide-card-container">
        <div className="my-guide-card-thumbnail">
          <img src={tech1} />
        </div>
        <div className="my-guide-card-description">
          <h3>Title</h3>
          <h4>Description of the guide</h4>
        </div>
        <div className="my-guide-card-edit">
          <FontAwesomeIcon size="lg" icon={faPencilAlt} />
        </div>
      </div>
    </Link>
  );
};

export default MyGuideCard;
