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
    if (item.object === 'post') {
      const data = Object.assign(item, {
        slug: await mediaService.fetchPostSlug(item.object_id),
      });
      return data;
    }
    if (item.object === 'page') {
      const data = Object.assign(item, {
        slug: await fetchPageSlug(item.object_id),
      });
      return data;
    }

    return item;
  });

  return navWithSlugs;
};

const fetchMainNav = async () => {
  const mainNavMenu = await axios.get(WP_MAIN_NAV_MENU)
    .then(navMenu => addSlugsToNav(navMenu.data));
  return mainNavMenu;
};

export default fetchMainNav;
