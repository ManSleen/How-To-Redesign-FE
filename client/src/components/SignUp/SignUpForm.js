import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ActionButton from '../../assets/buttons/ActionButton';

import { signUp } from '../../store/actions';

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

const SignUpForm = ({ history, signUp }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: '',
    about_me: '',
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
    signUp(user);
    history.push('/profile');
  };

  return (
    <div className="sign-up-form-container">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="outlined-name"
          label="Name"
          name="name"
          className={classes.textField}
          value={user.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="name"
        />
        <TextField
          id="outlined-multiline-static"
          label="About Me"
          name="about_me"
          multiline
          fullWidth
          rows="4"
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-email"
          label="Email"
          name="email"
          className={classes.textField}
          value={user.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="email"
        />
        <TextField
          fullWidth
          id="outlined-username"
          label="Username"
          name="username"
          className={classes.textField}
          value={user.username}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="username"
        />
        <TextField
          fullWidth
          id="outlined-password"
          label="Password"
          name="password"
          type="password"
          className={classes.textField}
          value={user.password}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="new-password"
        />

        <ActionButton type="submit" text="Create Account" />
      </form>

      <div className="sign-up-form-login">
        Already have an account?{' '}
        <Link to="login">
          <span>Login →</span>
        </Link>
      </div>
    </div>
  );
};

export default connect(
  null,
  { signUp }
)(SignUpForm);
