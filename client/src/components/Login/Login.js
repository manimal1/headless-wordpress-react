import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Card,
  CardContent,
  TextField,
  Button,
} from 'mui-components';
import { Section } from '..';
import './Login.css';

const Login = (props) => {
  const {
    username,
    password,
    handleChange,
    onSubmit,
    handleRetrievePassword,
    handleSignUpSelection,
  } = props;

  return (
    <Section className="login-page">
      <Card className="login">
        <CardContent>
          <Title>
            Welcome Back!
          </Title>

          <form method="post" id="login" onSubmit={onSubmit}>
            <div className="login-inputs">
              <TextField
                id="username"
                name="username"
                label="Username"
                className="input"
                value={username}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                className="input"
                value={password}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
            </div>
            <Button type="submit" variant="contained" color="secondary">
              Log In
            </Button>
          </form>

          <div className="login-options">
            <Button color="primary" onClick={handleRetrievePassword}>
              Forgot Password?
            </Button>
            <Button onClick={handleSignUpSelection}>
              Sign Up?
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleRetrievePassword: PropTypes.func.isRequired,
  handleSignUpSelection: PropTypes.func.isRequired,
};

export default Login;
