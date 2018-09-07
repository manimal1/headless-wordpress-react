import { mediaService } from 'wp-services';
import { wpApiConstants } from '../constants';

const fetchPostsData = (postsPerPage, selectedPage) => async (dispatch) => {
  mediaService.fetchPosts(postsPerPage, selectedPage)
    .then((data) => {
      dispatch({ type: wpApiConstants.FETCH_POSTS, payload: data });
    });
};

export default fetchPostsData;
