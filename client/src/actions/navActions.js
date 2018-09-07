import { navService } from 'wp-services';
import { wpApiConstants } from '../constants';

const fetchMainNavMenu = () => (dispatch) => {
  navService.fetchMainNav()
    .then((mainNavMenu) => {
      dispatch({ type: wpApiConstants.FETCH_MAIN_NAV_MENU, payload: mainNavMenu });
    });
};

export default fetchMainNavMenu;
