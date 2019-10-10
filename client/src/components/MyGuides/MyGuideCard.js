import React from 'react';

import { Link } from 'react-router-dom';

import tech1 from '../../assets/images/tech1.jpg';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyGuideCard = ({ guide }) => {
  return (
    <Link to={`/guide/${guide.id}`}>
      <div className="my-guide-card-container">
        <div className="my-guide-card-thumbnail">
          <img alt="my guide thumbnail" src={tech1} />
        </div>
        <div className="my-guide-card-description">
          <h3>
            {guide.guide_name.length > 30
              ? `${guide.guide_name.slice(0, 30).trim()}...`
              : guide.guide_name}
          </h3>
          <h4>
            {guide.guide_description.length >= 40
              ? `${guide.guide_description.slice(0, 40).trim()}...`
              : guide.guide_description}
          </h4>
        </div>
        <div className="my-guide-card-edit">
          <FontAwesomeIcon size="lg" icon={faPencilAlt} />
        </div>
      </div>
    </Link>
  );
};

export default MyGuideCard;
