import React from 'react';
import { Link } from 'react-router-dom';

import tech1 from '../../assets/images/tech1.jpg';
import avatar from '../../assets/images/user-avatar.png';

const GuideCard = ({ guide }) => {
  return (
    <Link to={`/guide/${guide.id}`}>
      <div className="guide-card-container">
        <img alt="guide cover" src={guide.guide_image || tech1} />
        <div className="guide-card-bottom">
          <div className="guide-card-avatar">
            <img alt="user avatar" src={avatar} />
          </div>
          <div className="guide-card-info">
            <h3>{guide.guide_name}</h3>
            <h4>
              by <span>{guide.username}</span>
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
