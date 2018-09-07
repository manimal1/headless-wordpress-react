import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import Cookies from 'cookies-js';
import { userService } from 'wp-services';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      Cookies.get('Wp-UserLoggedInCookie') && userService.validateAuthCookie()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  location: undefined,
};

export default PrivateRoute;
