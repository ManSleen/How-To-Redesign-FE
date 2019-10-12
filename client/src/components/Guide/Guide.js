import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import tech1 from '../../assets/images/tech1.jpg';
import Star from '../../assets/icons/Star';
import Heart from '../../assets/icons/Heart';

import { getGuideById } from '../../store/actions';

const Guide = ({ match, getGuideById, guide }) => {
  const { id } = match.params;

  useEffect(() => {
    getGuideById(id);
  }, [getGuideById, id]);

  if (guide) {
    console.log(guide);
    return (
      <div className="guide-container">
        <div className="guide-header">
          <h2>{guide.guide_name}</h2>
          <p>
            by <span>{guide.username}</span> in{' '}
            <span>
              {guide.guide_category === ''
                ? 'uncategorized'
                : guide.guide_category}
            </span>
          </p>
          <div className="likes-container">
            <Heart />
            <p>2,064 </p>
            <Star />
            <p>Featured</p>
          </div>
        </div>
        <img alt="" className="main-guide-image" src={guide.guide_image} />
        <div className="guide-description">
          <p>{guide.guide_description}</p>
        </div>
        <div className="guide-materials-tools">
          <br />
          <h3>Materials:</h3>
          <p>{guide.guide_materials !== '' ? guide.guide_materials : 'none'}</p>
          <br />
          <h3>Tools:</h3>
          <p>{guide.guide_tools !== '' ? guide.guide_tools : 'none'}</p>
        </div>
        <h2>Instructions</h2>
        {guide.steps.map(step => {
          return (
            <div className="guide-step">
              <div className="guides-scroll-container">
                <img alt="" className="guide-image" src={step.step_image_url} />
              </div>
              <h3>{`${step.step_number}. ${step.step_title}`}</h3>
              <p>{step.step_description}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    guide: state.guide
  };
};

export default connect(
  mapStateToProps,
  { getGuideById }
)(Guide);
