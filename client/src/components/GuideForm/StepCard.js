import React from 'react';

import tech1 from '../../assets/images/tech1.jpg';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StepCard = ({ step }) => {
  return (
    <div className="my-step-card-container">
      <div className="my-step-card-thumbnail">
        <img alt="step cover" src={tech1} />
      </div>
      <div className="my-step-card-description">
        <h3>
          {step.step_title.length > 30
            ? `${step.step_title.slice(0, 30).trim()}...`
            : step.step_title}
        </h3>
        <h4>
          {step.step_description.length >= 40
            ? `${step.step_description.slice(0, 40).trim()}...`
            : step.step_description}
        </h4>
      </div>
      <div className="my-step-card-edit">
        <FontAwesomeIcon size="lg" icon={faPencilAlt} />
      </div>
    </div>
  );
};

export default StepCard;
