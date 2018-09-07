import { navService } from 'wp-services';
import { wpApiConstants } from '../constants';

const fetchPages = () => async (dispatch) => {
  const pages = await navService.fetchPages();

  dispatch({ type: wpApiConstants.FETCH_PAGES, payload: pages });
};

export default fetchPages;
