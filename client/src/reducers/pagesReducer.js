import { wpApiConstants } from '../constants';

export default function(state = null, action) {
  switch (action.type) {
    case wpApiConstants.FETCH_PAGES:
      return action.payload || false;
    default:
      return state;
  }
}
