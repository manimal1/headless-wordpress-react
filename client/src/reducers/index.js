import { combineReducers } from 'redux';
import alertReducers from './alertReducers';
import authenticationReducer from './authenticationReducer';
import mainNavMenuReducer from './mainNavMenuReducer';
import pagesReducer from './pagesReducer';
import postsReducer from './postsReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  alerts: alertReducers,
  mainNavMenu: mainNavMenuReducer,
  pages: pagesReducer,
  postsData: postsReducer,
  userAuth: authenticationReducer,
  userRegistration: registrationReducer,
});
