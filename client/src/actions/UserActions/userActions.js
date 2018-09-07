import { userConstants } from '../../constants';

export const userRegister = {
  request: function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  },
  success: function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  },
  failure: function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  },
};

export const userLogin = {
  request: function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  },
  success: function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  },
  failure: function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  },
};
