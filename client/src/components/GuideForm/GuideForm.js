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

const GuideForm = ({ history }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
      <h3>Create a Guide</h3>
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
            <p>Choose Images to upload</p>
          </div>
        </div>
        <FormControl
          fullWidth
          variant="outlined"
          margin="normal"
          className={classes.formControl}
        >
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Category
          </InputLabel>
          <Select
            value={guide.guide_category}
            onChange={handleChange}
            labelWidth={labelWidth}
            inputProps={{
              name: 'guide_category',
              id: 'outlined-age-simple'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'tech'}>Tech</MenuItem>
            <MenuItem value={'craft'}>Craft</MenuItem>
            <MenuItem value={'outdoors'}>Outdoors</MenuItem>
            <MenuItem value={'food'}>Food</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-name"
          label="Keywords"
          name="guide_keywords"
          className={classes.textField}
          value={guide.guide_keywords}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-name"
          label="Materials"
          name="guide_materials"
          className={classes.textField}
          value={guide.guide_materials}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-name"
          label="Tools"
          name="guide_tools"
          className={classes.textField}
          value={guide.guide_tools}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <ActionButton type="submit" text="Next" />
      </form>
    </div>
  );
};

export default GuideForm;
