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

const Login = ({ history }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/profile');
  };

  return (
    <div className="login-form-container">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-name"
          label="Username"
          name="username"
          className={classes.textField}
          value={user.username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="name"
        />
        <TextField
          fullWidth
          type="password"
          id="outlined-name"
          label="Password"
          name="password"
          className={classes.textField}
          value={user.password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="current-password"
        />

        <ActionButton type="submit" text="Log In" />
      </form>
    </div>
  );
};

export default Login;
