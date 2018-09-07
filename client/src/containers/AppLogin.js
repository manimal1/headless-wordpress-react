import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userService } from 'wp-services';
import { userActions } from '../actions';
import { SignUp, Login } from '../components';

class AppLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      loginType: 'login',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUpSelection = () => {
    this.setState({ loginType: 'signup' });
  }

  handleLoginSelection = () => {
    this.setState({ loginType: 'login' });
  }

  render() {
    if (userService.isAuthenticated()) {
      return <Redirect to="/" />;
    }

    const {
      firstname,
      lastname,
      username,
      email,
      password,
      loginType,
    } = this.state;
    const {
      handleRegisterUser,
      handleLogin,
      handleRetrievePassword,
    } = this.props;

    return (
      <div>
        {loginType === 'signup' &&
          (
            <SignUp
              {...this.state}
              handleLoginSelection={this.handleLoginSelection}
              handleChange={this.handleChange}
              onSubmit={e => handleRegisterUser(e, firstname, lastname, username, email, password)}
            />
          )
        }

        {loginType === 'login' &&
          (
            <Login
              {...this.state}
              handleSignUpSelection={this.handleSignUpSelection}
              handleChange={this.handleChange}
              onSubmit={e => handleLogin(e, username, password)}
              handleRetrievePassword={handleRetrievePassword}
            />
          )
        }
      </div>
    );
  }
}

AppLogin.propTypes = {
  handleRegisterUser: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRetrievePassword: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (e, username, password) => {
    e.preventDefault();
    dispatch(userActions.login(username, password));
  },
  handleRegisterUser: (e, firstname, lastname, username, email, password) => {
    e.preventDefault();
    dispatch(userActions.register(firstname, lastname, username, email, password));
  },
  handleRetrievePassword: (username) => {
    dispatch(userActions.retrievePassword(username));
  },
});

function mapStateToProps({ userAuth, userRegistration }) {
  return { userAuth, userRegistration };
}

const ConnectedAppLogin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLogin);

export default ConnectedAppLogin;
