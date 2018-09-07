import { userService } from 'wp-services';
import { userConstants } from '../../constants';
import alertActions from '../alertActions';
import utils from '../../utils';
import { userRegister, userLogin } from './userActions';

const register = (firstname, lastname, username, email, password) => async (dispatch) => {
  dispatch(userRegister.request({ user: { username, isRegisterd: false } }));

  userService.registerUser(firstname, lastname, username, email, password)
    .then((user) => {
      dispatch(userRegister.success(user));
      utils.history.push('/login');
      dispatch(alertActions.success('Registration successful'));
    }).catch((err) => {
      dispatch(userRegister.failure(err));
    });
};

const login = (username, password) => async (dispatch) => {
  dispatch(userLogin.request({
    data: {
      username,
      isLoggedIn: false,
    },
  }));

  userService.authenticate(username, password)
    .then((user) => {
      const data = Object.assign({}, { isLoggedIn: true, ...user });
      dispatch(userLogin.success({ data }));
      utils.history.push('/');
    })
    .catch((err) => {
      dispatch(userLogin.failure(err));
    });
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const retrievePassword = (username) => {
  userService.retrievePassword(username);
};

const userActions = {
  register,
  login,
  logout,
  retrievePassword,
  // @TODO: create delete functions
  // delete
};

export default userActions;
