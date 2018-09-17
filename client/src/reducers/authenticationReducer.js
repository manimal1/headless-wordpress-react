import Cookies from 'cookies-js';
import { userConstants } from '../constants';

const cookie = Cookies.get('');
const initialState = cookie ? { loggedIn: true, cookie } : {};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {},
      };
    case userConstants.LOGOUT:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}
