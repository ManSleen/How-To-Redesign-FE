import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GuideForm from './GuideForm.js';
import { getGuideById } from '../../store/actions';

const EditGuide = ({ history, match, getGuideById, guide }) => {
  const { id } = match.params;
  console.log(id);
  useEffect(() => {
    getGuideById(id);
  }, []);

  return (
    <div className="add-guide-container">
      <GuideForm isEditing={true} guide={guide} history={history} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    guide: state.guide
  };
};

export default connect(
  mapStateToProps,
  { getGuideById }
)(EditGuide);
