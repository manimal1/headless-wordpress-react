import React, { Component } from 'react';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { userService } from 'wp-services';
import { FacebookButton } from '../components';

// your facebook app id goes here!!!
// It will not work without this!!!
const appId = '';

const ReactLogin = props => <Login {...props} className="fb-login" />;

class FacebookLogin extends Component {
  handleResponse = (data) => {
    const { accessToken } = data.tokenDetail;
    userService.registerFbUser(accessToken);
    // @TODO: if is logged in, refresh token...
  }

  handleError = (error) => {
    console.log(error); // eslint-disable-line no-console
  }

  render() {
    return (
      <FacebookProvider appId={appId}>
        <FacebookButton>
          <ReactLogin
            scope="email"
            onResponse={this.handleResponse}
            onError={this.handleError}
          >
            <span>
              Facebook Login
            </span>
          </ReactLogin>
        </FacebookButton>
      </FacebookProvider>
    );
  }
}

export default FacebookLogin;
