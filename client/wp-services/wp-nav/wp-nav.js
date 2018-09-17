import axios from 'axios';
import _ from 'lodash';
import bluebird from 'bluebird';
import { WP_MAIN_NAV_MENU } from '../wp-types';
import mediaService from '../wp-media';
import { fetchPageSlug } from './wp-pages';

const addSlugsToNav = async (navMenu) => {
  const navItems = await navMenu.items;
  const sortedMenu = _.sortBy(navItems, ['menu_order']);
  const navWithSlugs = bluebird.map(sortedMenu, async (item) => {
    const retrieveSlug = item.object === 'page'
      ? fetchPageSlug
      : mediaService.fetchPostSlug;

    return Object.assign(item, {
      slug: await retrieveSlug(item.object_id),
    });
  });

  return navWithSlugs;
};

const fetchMainNav = async () => axios.get(WP_MAIN_NAV_MENU)
  .then(navMenu => addSlugsToNav(navMenu.data));

export default fetchMainNav;
