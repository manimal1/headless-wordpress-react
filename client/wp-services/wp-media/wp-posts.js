import axios from 'axios';
import bluebird from 'bluebird';
import { WP_POSTS, WP_USERS } from '../wp-types';
import fetchMediaThumbnail from './wp-thumbnails';

const getAuthorInfo = async (userId) => {
  const authorInfo = await axios.get(`${WP_USERS}/${userId}`);
  return authorInfo.data;
};

const addPostInfo = async (posts) => {
  const appendedPosts = bluebird.map(posts, async (post) => {
    let featuredMedia;
    let authorInfo;
    if (post.featured_media) {
      featuredMedia = await fetchMediaThumbnail('', post.featured_media);
    }
    if (post.author) {
      authorInfo = await getAuthorInfo(post.author);
    }
    return Object.assign(post, {
      featuredMedia,
      authorInfo,
    });
  });

  return appendedPosts;
};

export const getPagination = (headers, posts, postsPerPage, selectedPage) => {
  const totalPosts = +headers['x-wp-total'];
  const totalPages = +headers['x-wp-totalpages'];
  const toPost = (selectedPage * postsPerPage) > totalPosts
    ? totalPosts : selectedPage * postsPerPage;
  const fromPost = selectedPage !== 1 ? (selectedPage - 1) * postsPerPage + 1 : 1;
  const previousPage = selectedPage > 1 ? selectedPage - 1 : 1;
  const nextPage = selectedPage < totalPages ? selectedPage + 1 : totalPages;
  const postData = posts.map((post, index) => {
    const postDataForPagination = {
      id: post.id,
      slug: post.slug,
      number: fromPost + index,
    };

    return postDataForPagination;
  });

  return {
    totalPosts,
    totalPages,
    fromPost,
    toPost,
    previousPage,
    nextPage,
    postData,
  };
};

export const fetchPosts = async (postsPerPage = 4, selectedPage = 1) => {
  const postApi = await axios.get(`${WP_POSTS}?per_page=${postsPerPage}&page=${selectedPage}`);
  const posts = await addPostInfo(postApi.data);
  const pagination = getPagination(postApi.headers, posts, postsPerPage, selectedPage);
  return { posts, pagination };
};

export const fetchPostById = async (postId) => {
  const post = await axios.get(`${WP_POSTS}/${postId}`);
  return post.data;
};

export const fetchPostSlug = async (postId) => {
  const post = await axios.get(`${WP_POSTS}/${postId}`);
  return post.data.slug;
};
