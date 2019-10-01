import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '../../assets/icons/CameraIcon';
import ActionButton from '../../assets/buttons/ActionButton';

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

const AddStep = ({ history }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const [guide, setGuide] = useState({
    guide_name: '',
    guide_description: '',
    guide_category: '',
    guide_keywords: '',
    guide_materials: ''
  });

  const handleChange = e => {
    setGuide({
      ...guide,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/add-step');
  };
  return (
    <div className="guide-form-container">
      <div className="guide-photo-upload-input">
        <h3>Add Instructions</h3>
      </div>
      <h4>Step 1</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-name"
          label="Title"
          name="guide_name"
          className={classes.textField}
          value={guide.guide_name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="name"
          required
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name="guide_description"
          multiline
          fullWidth
          rows="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <div className="guide-photo-upload-input">
          <h4>Upload Project Images</h4>
          <div className="drop-zone-image-upload">
            <CameraIcon />
            <p>Choose Images to Upload</p>
          </div>
        </div>
        <button type="button" className="add-another-step">
          Add Another Step
        </button>
        <ActionButton type="submit" text="Create Guide" />
      </form>
    </div>
  );
};

export default AddStep;
