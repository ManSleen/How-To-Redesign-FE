import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '../../assets/icons/CameraIcon';
import ActionButton from '../../assets/buttons/ActionButton';
import AddStep from './AddStep';

import { addGuide, addStep } from '../../store/actions';
import MyGuideCard from '../MyGuides/MyGuideCard';
import StepCard from './StepCard';

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

const GuideForm = ({ history, addGuide, user, addStep }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [guide, setGuide] = useState({
    guide_creator: user ? user.id : '',
    guide_name: '',
    guide_description: '',
    guide_category: '',
    guide_keywords: '',
    guide_materials: '',
    guide_tools: '',
    date_created: moment().format('YYYY-MM-DD')
  });

  const [guideSteps, setGuideSteps] = useState([]);

  const handleChange = e => {
    setGuide({
      ...guide,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addGuide(guide).then(res => {
      if (res) {
        guideSteps.map((step, index) => {
          step.guide_id = res.data.id;
          step.step_number = index + 1;
          addStep(step);
        });
        console.log(guideSteps);
      }
    });
  };

  return (
    <div className="guide-form-container">
      <h3>Create a Guide</h3>
      <form id="guide-form" onSubmit={handleSubmit}></form>

      <TextField
        fullWidth
        id="outlined-name"
        label="Guide Title"
        name="guide_name"
        className={classes.textField}
        value={guide.guide_name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        autoComplete="name"
        required
        form="guide-form"
      />
      <div className="guide-photo-upload-input">
        <h4>Upload Project Images</h4>
        <div className="drop-zone-image-upload">
          <CameraIcon />
          <p>Choose Images to upload</p>
        </div>
      </div>
      <TextField
        id="outlined-multiline-static"
        label="Guide Description"
        name="guide_description"
        multiline
        fullWidth
        rows="4"
        onChange={handleChange}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={guide.guide_description}
        form="guide-form"
      />

      <FormControl
        fullWidth
        variant="outlined"
        margin="normal"
        className={classes.formControl}
        form="guide-form"
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
          <MenuItem value={'Tech'}>Tech</MenuItem>
          <MenuItem value={'Craft'}>Craft</MenuItem>
          <MenuItem value={'Outdoors'}>Outdoors</MenuItem>
          <MenuItem value={'Food'}>Food</MenuItem>
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
        form="guide-form"
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
        form="guide-form"
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
        form="guide-form"
      />
      <br />
      <br />
      <h3>Add Instructions</h3>
      {guideSteps.map((step, index) => (
        <StepCard key={index} step={step} />
      ))}
      <AddStep guideSteps={guideSteps} setGuideSteps={setGuideSteps} />
      <input type="submit" value="Create Guide" form="guide-form" />
      {/* <ActionButton form="guide-form" type="submit" text="Next" /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.currentUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addGuide, addStep }
  )(GuideForm)
);
