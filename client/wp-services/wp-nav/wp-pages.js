import axios from 'axios';
import { WP_PAGES } from '../wp-types';

export const fetchPages = async () => {
  const pages = await axios.get(WP_PAGES);
  return pages.data;
};

export const fetchPageById = async (pageId) => {
  const page = await axios.get(`${WP_PAGES}/${pageId}`);
  return page.data;
};

export const fetchPageSlug = async (pageId) => {
  const page = await axios.get(`${WP_PAGES}/${pageId}`);
  return page.data.slug;
};
