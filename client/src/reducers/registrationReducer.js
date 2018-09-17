import { userConstants } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true,
        registered: false,
        user: {},
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user,
      };
    case userConstants.REGISTER_FAILURE:
      return {
        registering: false,
        registered: false,
        user: {},
      };
    default:
      return state;
  }
}
