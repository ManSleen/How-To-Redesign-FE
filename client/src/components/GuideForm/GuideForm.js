import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { connect } from 'react-redux';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import CameraIcon from '../../assets/icons/CameraIcon';

import AddStep from './AddStep.js';
import StepCard from './StepCard.js';

import { addGuide, addStep, editGuide } from '../../store/actions';

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

const GuideForm = ({
  history,
  addGuide,
  user,
  addStep,
  isEditing,
  currentGuide,
  editGuide
}) => {
  const maxImageSize = 5242880;
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    getRootProps,
    getInputProps,
    isDragReject,
    acceptedFiles,
    rejectedFiles
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles, rejectedFiles) => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const isFileTooLarge =
    rejectedFiles.length > 0 && rejectedFiles[0].size > maxImageSize;

  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [guide, setGuide] = useState({
    guide_creator: user ? user.id : '',
    guide_name: isEditing ? currentGuide.guide_name : '',
    guide_description: isEditing ? currentGuide.guide_description : '',
    guide_category: isEditing ? currentGuide.guide_category : '',
    guide_keywords: isEditing ? currentGuide.guide_keywords : '',
    guide_materials: isEditing ? currentGuide.guide_materials : '',
    guide_tools: isEditing ? currentGuide.guide_tools : '',
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
    if (isEditing) {
      handleEditGuide();
    } else {
      console.log('guideSteps', guideSteps);
      createGuide(guide);
    }
  };

  const handleImageUpload = async (file, guideId) => {
    try {
      const {
        data: { key, url }
      } = await axiosWithAuth().post(`/api/photos/signed`, {
        id: guideId
      });
      await axios.put(url, file[0], {
        headers: {
          'Content-Type': 'image/*'
        }
      });
      files.forEach(file => URL.revokeObjectURL(file.preview));
      console.log(`${process.env.REACT_APP_S3_BUCKET}${key}`);
      return `${process.env.REACT_APP_S3_BUCKET}${key}`;
    } catch (err) {
      console.log(err);
    }
  };

  const createGuide = async guide => {
    try {
      const {
        data: { id }
      } = await addGuide(guide);
      guideSteps.map((step, index) => {
        step.guide_id = id;
        step.step_number = index + 1;
        addStep(step);
        return step;
      });
      const uploadedImage = await handleImageUpload(files, id);
      console.log('uploadedImage', uploadedImage);
      console.log('files', files);
      const guideWithImage = {
        ...guide,
        guide_image: uploadedImage
      };
      await editGuide(guideWithImage, id);
      await history.push(`/guide/${id}`);
    } catch (err) {
      console.log('GuideForm.js createGuide ERROR:', err);
    }
  };

  const handleEditGuide = () => {};

  return (
    <div className="guide-form-container">
      <h3>{isEditing ? 'Edit Guide' : 'Create a Guide'}</h3>
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
        <h4>Upload a Project Image</h4>

        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div
            className={`drop-zone-image-upload${isDragActive ? ' active' : ''}${
              isDragReject ? ' rejected' : ''
            }`}
          >
            {!isDragActive &&
              files.map((file, index) => (
                <div className="thumbnail-preview" key={file.preview}>
                  <img className="thumb" src={file.preview} />
                </div>
              ))}

            {!isDragActive && files.length === 0 && (
              <div className="dropzone-image">
                <CameraIcon />
                <p>Click or drag a file to upload</p>
              </div>
            )}
            {isDragActive && !isDragReject && <p>Drop it here my dude!</p>}

            {isFileTooLarge && <div className="error">File is too large</div>}
            {isDragReject && (
              <div className="error">
                <p>Images only please</p>
              </div>
            )}
          </div>
        </div>
        <div className="upload-image-list">
          <ul>
            {acceptedFiles.length > 0 &&
              acceptedFiles.map(acceptedFile => <li>{acceptedFile.name}</li>)}
          </ul>
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
      {guideSteps.map((step, index) => {
        console.log(step);
        return <StepCard key={index} step={step} />;
      })}
      <AddStep guideSteps={guideSteps} setGuideSteps={setGuideSteps} />
      <input
        color="white"
        className="create-guide"
        type="submit"
        value="Create Guide"
        form="guide-form"
      />
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
    { addGuide, addStep, editGuide }
  )(GuideForm)
);
