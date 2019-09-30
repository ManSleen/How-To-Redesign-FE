import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
    title: '',
    description: '',
    category: '',
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
        <TextField
          fullWidth
          id="outlined-name"
          label="Title"
          name="title"
          className={classes.textField}
          value={guide.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="name"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          fullWidth
          rows="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Category
          </InputLabel>
          <Select
            value={guide.category}
            onChange={handleChange}
            labelWidth={labelWidth}
            inputProps={{
              name: 'category',
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default GuideForm;
