import {
  authenticate,
  isAuthenticated,
  logout,
  retrievePassword,
  validateAuthCookie,
} from './wp-userAuth';
import {
  registerFbUser,
  registerUser,
} from './wp-userRegister';

const userService = {
  authenticate,
  isAuthenticated,
  logout,
  registerUser,
  registerFbUser,
  retrievePassword,
  validateAuthCookie,
};

export default userService;
