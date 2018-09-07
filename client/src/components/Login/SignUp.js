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

const SignUp = (props) => {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    handleChange,
    onSubmit,
    handleLoginSelection,
  } = props;

  return (
    <Section className="login-page">
      <Card className="login">
        <CardContent>
          <Title>
            Sign Up for Free
          </Title>

          <form
            method="post"
            id="signup"
            onSubmit={onSubmit}
          >
            <div className="login-inputs">
              <TextField
                id="firstname"
                name="firstname"
                label="First Name"
                className="input"
                value={firstname}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
              <TextField
                id="lastname"
                name="lastname"
                label="Last Name"
                className="input"
                value={lastname}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
              <TextField
                id="username"
                name="username"
                label="Choose Username"
                className="input"
                value={username}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
              <TextField
                id="email"
                name="email"
                label="Enter Email"
                className="input"
                value={email}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
              <TextField
                id="password"
                name="password"
                label="Set Password"
                className="input"
                value={password}
                onChange={e => handleChange(e)}
                margin="normal"
                required
              />
            </div>

            <Button variant="contained" color="secondary" type="submit">
              Get Started
            </Button>
          </form>

          <div className="login-options">
            <Button onClick={handleLoginSelection}>
              Login?
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

SignUp.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleLoginSelection: PropTypes.func.isRequired,
};

export default SignUp;
