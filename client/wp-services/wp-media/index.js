import {
  fetchPostById,
  fetchPostSlug,
  fetchPosts,
} from './wp-posts';
import fetchMediaThumbnail from './wp-thumbnails';

const mediaService = {
  fetchPostById,
  fetchPostSlug,
  fetchPosts,
  fetchMediaThumbnail,
};

export default mediaService;
