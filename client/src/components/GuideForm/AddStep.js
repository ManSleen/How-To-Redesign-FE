import React, { useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '../../assets/icons/CameraIcon';
import ActionButton from '../../assets/buttons/ActionButton';

import { addStep } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddStep = ({ history, addStep, guideSteps, setGuideSteps }) => {
  const classes = useStyles();

  const [step, setStep] = useState({
    step_title: '',
    step_description: '',
    step_image_url: ''
  });

  const handleChange = e => {
    setStep({
      ...step,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setGuideSteps([...guideSteps, step]);
    setStep({
      step_title: '',
      step_description: '',
      step_image_url: ''
    });
  };

  return (
    <div className="step-form-container">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-name"
          label="Title"
          name="step_title"
          className={classes.textField}
          value={step.step_title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="name"
          required
        />
        <div className="guide-photo-upload-input">
          <h4>Upload Instruction Images</h4>
          <div className="drop-zone-image-upload">
            <CameraIcon />
            <p>Choose Images to upload</p>
          </div>
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name="step_description"
          value={step.step_description}
          multiline
          fullWidth
          rows="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <button type="submit" className="add-another-step">
          <p>Add Step</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="#E97520"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addStep }
)(AddStep);
