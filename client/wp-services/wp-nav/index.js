import fetchMainNav from './wp-nav';
import {
  fetchPages,
  fetchPageById,
  fetchPageSlug,
} from './wp-pages';

const navService = {
  fetchMainNav,
  fetchPages,
  fetchPageById,
  fetchPageSlug,
};

export default navService;
