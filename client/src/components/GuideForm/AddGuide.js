import React from 'react';

import GuideForm from './GuideForm.js';

const AddGuide = ({ history }) => {
  return (
    <div className="add-guide-container">
      <GuideForm history={history} />
    </div>
  );
};

export default AddGuide;
