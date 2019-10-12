import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '../../assets/icons/CameraIcon';

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

const AddStep = ({ history, guideSteps, setGuideSteps }) => {
  // DROPZONE CONFIG START
  const maxImageSize = 5242880;

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
  // DROPZONE CONFIG END

  //State
  const [files, setFiles] = useState([]);
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
    handleImageUpload(files).then(res => {
      const newStep = { ...step, step_image_url: res };
      setGuideSteps([...guideSteps, newStep]);
    });
    setStep({
      step_title: '',
      step_description: '',
      step_image_url: ''
    });
    setFiles([]);
  };

  const handleImageUpload = async file => {
    try {
      const {
        data: { key, url }
      } = await axiosWithAuth().post(`/api/photos/signed`, {
        id: 'instructions'
      });

      await axios.put(url, file[0], {
        headers: {
          'Content-Type': 'image/*'
        }
      });

      files.forEach(file => URL.revokeObjectURL(file.preview));
      return `${process.env.REACT_APP_S3_BUCKET}${key}`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="step-form-container">
      <form onSubmit={e => handleSubmit(e, step)}>
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
          <h4>Upload an Image</h4>

          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div
              className={`drop-zone-image-upload${
                isDragActive ? ' active' : ''
              }${isDragReject ? ' rejected' : ''}`}
            >
              {!isDragActive &&
                files.map((file, index) => (
                  <div className="thumbnail-preview" key={file.preview}>
                    <img className="thumb" src={file.preview} />
                  </div>
                ))}

              {!isDragActive && files.length === 0 && (
                <div className="dropzone-image ">
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
              {files.length > 0 &&
                files.map(acceptedFile => <li>{acceptedFile.name}</li>)}
            </ul>
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

export default AddStep;
