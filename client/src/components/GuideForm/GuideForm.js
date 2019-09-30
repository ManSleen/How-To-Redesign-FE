import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));

const GuideForm = ({ history }) => {
  const classes = useStyles();

  const [guide, setGuide] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = e => {
    setGuide({
      ...guide,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/profile');
  };
  return (
    <div className="guide-form-container">
      <h3>Add a Guide</h3>
      <form onSubmit={handleSubmit}>
        <input />
        <input />
        <input />
        <input />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default GuideForm;
