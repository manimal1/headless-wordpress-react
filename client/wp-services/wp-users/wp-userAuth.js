import axios from 'axios';
import Cookies from 'cookies-js';
import {
  WP_NONCE_COOKIE,
  WP_GENERATE_COOKIE,
  WP_VALIDATE_COOKIE,
  WP_RETRIEVE_PASSWORD,
} from '../wp-types';

const cookieKey = 'Wp-UserLoggedInCookie';

function getNonce() { // eslint-disable-line no-unused-vars
  return axios.get(WP_NONCE_COOKIE);
}

function generateAuthCookie(username, password) {
  return axios({
    method: 'post',
    url: WP_GENERATE_COOKIE,
    params: {
      username,
      password,
      insecure: 'cool',
    },
  });
}

export const authenticate = async (username, password) => {
  const authenticateWithCookie = await generateAuthCookie(username, password)
    .then((res) => {
      if (res.data.status === 'ok') {
        Cookies.set('Wp-UserLoggedInCookie', res.data.cookie);
      }

      return res.data.user;
    });

  return authenticateWithCookie;
};

export const validateAuthCookie = async () => {
  const cookie = Cookies.get(cookieKey);
  const isValid = await axios.get(`${WP_VALIDATE_COOKIE}/?cookie=${cookie}&insecure=cool`)
    .then(res => res.data.valid);

  return isValid === true;
};

export const isAuthenticated = () => Cookies.get(cookieKey) !== undefined;

export const logout = () => {
  Cookies.expire(cookieKey);
};

export const retrievePassword = (username) => {
  axios.get(`${WP_RETRIEVE_PASSWORD}/?user_login=${username}`);
};
