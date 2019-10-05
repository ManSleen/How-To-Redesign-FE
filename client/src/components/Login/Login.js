import React, { useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ActionButton from '../../assets/buttons/ActionButton';

import { login } from '../../store/actions';

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

const Login = ({ history, login }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
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
    console.log('user from login handlesubmit', user);
    login(user).then(res => {
      if (res) {
        history.push('/profile');
      }
    });
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

export default connect(
  null,
  { login }
)(Login);
