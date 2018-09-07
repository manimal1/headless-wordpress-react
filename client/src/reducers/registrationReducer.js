import { userConstants } from '../constants';

export default function(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user,
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
